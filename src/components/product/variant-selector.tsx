'use client';

import { sizeGuide } from '@/resources/size-guide';
import { Button, Column, Dialog, Row, SegmentedControl, Media, Table, Text } from '@once-ui-system/core';
import { useProduct, useUpdateURL } from '@/components/product/product-context';
import { ProductOption, ProductVariant } from '@/lib/types';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import './size-guide-dialog.css';

type Combination = {
  id: string;
  title: string; 
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const { state, updateOption } = useProduct();
  const updateURL = useUpdateURL();
  const [isPending, setIsPending] = useState(false);
  const [isSizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [measurementUnit, setMeasurementUnit] = useState<'in' | 'cm'>('in');
  const dialogRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const productHandle = params?.handle as string;

  // Function to get size guide data for current product
  const getSizeGuideData = () => {
    // Try to get the size guide for the current product handle
    // Check if the productHandle exists as a key in sizeGuide
    if (productHandle && productHandle in sizeGuide) {
      return sizeGuide[productHandle as keyof typeof sizeGuide];
    }
    
    // If not found, return the first available size guide as fallback
    const firstGuideKey = Object.keys(sizeGuide)[0];
    return firstGuideKey ? sizeGuide[firstGuideKey as keyof typeof sizeGuide] : null;
  };

  // Convert inches to centimeters
  const inchesToCm = (inches: number): number => {
    return parseFloat((inches * 2.54).toFixed(1));
  };

  // Format size guide data for the Table component
  const formatSizeGuideForTable = () => {
    const sizeGuideData = getSizeGuideData();
    
    if (!sizeGuideData || !sizeGuideData.sizes || sizeGuideData.sizes.length === 0) {
      return {
        headers: [],
        rows: []
      };
    }

    // Create headers based on the first size object's properties
    const firstSize = sizeGuideData.sizes[0];

    const headers = [
      { content: "Size", key: "label", sortable: false },
      ...Object.keys(firstSize)
        .filter(key => key !== 'label')
        .map(key => ({
          content: key.charAt(0).toUpperCase() + key.slice(1),
          key,
          sortable: false
        }))
    ];

    // Create rows from size data
    const rows = sizeGuideData.sizes.map(size => [
      size.label,
      ...Object.keys(firstSize)
        .filter(key => key !== 'label')
        .map(key => {
          // Use type assertion to tell TypeScript this is a valid key
          const value = size[key as keyof typeof size] as number;
          // Convert to cm if needed
          return measurementUnit === 'cm' ? inchesToCm(value) : value;
        })
    ]);

    return {
      headers,
      rows
    };
  };

  const hasSelectableOptions = options.some(option => option.values.length > 1);

  if (!hasSelectableOptions) {
    return null;
  }

  useEffect(() => {
    options.forEach((option) => {
      const optionNameLowerCase = option.name.toLowerCase();
      
      // For options with only one value, always select it
      if (option.values.length === 1 && !state[optionNameLowerCase]) {
        setIsPending(true);
        const newState = updateOption(optionNameLowerCase, option.values[0] || '');
        updateURL(newState);
      }
      
      // For color option, select the first value by default if not already selected
      if (optionNameLowerCase === 'color' && option.values.length > 0 && !state[optionNameLowerCase]) {
        setIsPending(true);
        const newState = updateOption(optionNameLowerCase, option.values[0] || '');
        updateURL(newState);
      }
    });
  }, [options, state, updateOption, updateURL]);

  // Create a map of all variant combinations
  const combinations: Combination[] = useMemo(() => {
    return variants.map((variant) => ({
      id: variant.id,
      title: variant.title,
      availableForSale: variant.availableForSale,
      ...variant.selectedOptions.reduce(
        (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
        {}
      )
    }));
  }, [variants]);

  // Create a map of variant combinations for quick lookup
  const variantCombinationsMap = useMemo(() => {
    const map = new Map<string, boolean>();
    
    combinations.forEach(combination => {
      // Create a unique key for this combination
      const optionEntries = Object.entries(combination)
        .filter(([key, _]) => 
          key !== 'id' && 
          key !== 'title' &&
          key !== 'availableForSale'
        );
      
      // Sort the entries to ensure consistent key generation
      const sortedEntries = optionEntries.sort(([a], [b]) => a.localeCompare(b));
      
      // Create a key in the format "color:Granite|size:2XL"
      const key = sortedEntries
        .map(([key, value]) => `${key}:${value}`)
        .join('|');
      
      // Store the availability status
      map.set(key, combination.availableForSale);
    });
    
    return map;
  }, [combinations]);

  // Effect to fix scroll lock when dialog opens with an image
  useEffect(() => {
    if (isSizeGuideOpen) {
      // Ensure body scroll lock is properly applied after dialog content is rendered
      const fixScrollLock = () => {
        // Force reapplication of scroll lock
        document.body.style.overflow = '';
        document.body.style.overflow = 'hidden';
      };

      // Apply fix after a short delay to ensure content is rendered
      const timeoutId = setTimeout(fixScrollLock, 100);
      
      // Also apply fix when window is resized
      window.addEventListener('resize', fixScrollLock);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', fixScrollLock);
      };
    }
  }, [isSizeGuideOpen]);

  return (
    <>
      <Column gap="24" fillWidth>
        {options.map((option) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Skip rendering selector for single values
          if (option.values.length === 1) {
            return null;
          }

          const buttons = option.values.map((value) => {
            // Check if this option value is available with current selections
            let isAvailableForSale = false;
            
            // Get all currently selected options
            const selectedOptions = Object.entries(state)
              .filter(([key]) => 
                options.some(opt => opt.name.toLowerCase() === key)
              );
            
            // Create a combination key with the current option and all other selected options
            const combinationEntries = [
              ...selectedOptions.filter(([key]) => key !== optionNameLowerCase),
              [optionNameLowerCase, value]
            ];
            
            // Sort the entries for consistent key generation
            const sortedEntries = combinationEntries.sort(([a], [b]) => a.localeCompare(b));
            
            // Create the key in the format "color:Granite|size:2XL"
            const combinationKey = sortedEntries
              .map(([key, val]) => `${key}:${val}`)
              .join('|');
            
            // Check if this combination is available
            isAvailableForSale = variantCombinationsMap.get(combinationKey) || false;
            
            // If no other options are selected, check if this option is available at all
            if (selectedOptions.length <= 1) {
              // For each variant, check if this option value exists and is available
              isAvailableForSale = combinations.some(combination => 
                combination[optionNameLowerCase] === value && 
                combination.availableForSale
              );
            }

            // Find the swatch color if this is a color option
            const swatch = optionNameLowerCase === 'color' 
              ? variants.find(v => 
                  v.selectedOptions.some(opt => 
                    opt.name.toLowerCase() === 'color' && opt.value === value
                  )
                )?.attributes?.color?.swatch
              : undefined;

            return {
              value,
              size: "l" as "s" | "m" | "l",
              disabled: !isAvailableForSale,
              children: optionNameLowerCase === 'color' ? (
                <Row gap="8" vertical="center">
                  <Column width="16" height="16" radius="full" border="neutral-alpha-medium" style={{
                    backgroundColor: swatch || '#CCCCCC'
                  }} />
                  <Text>{value}</Text>
                </Row>
              ) : value
            };
          });

          return (
            <Column key={option.id} gap="8" fillWidth>
              <Row fillWidth vertical="center" minHeight="32">
                <Row textVariant="label-default-s" fillWidth>
                  {option.name}
                </Row>
                {option.name.toLowerCase() === 'size' && productHandle && productHandle in sizeGuide && 
                  <Button data-border="rounded" size="s" variant="tertiary" prefixIcon="tshirt" onClick={() => setSizeGuideOpen(true)}>Size guide</Button>
                }
              </Row>
              <SegmentedControl
                buttons={buttons}
                selected={state[optionNameLowerCase] || ''}
                onToggle={(value) => {
                  // Find the button that was clicked
                  const clickedButton = buttons.find(button => button.value === value);
                  
                  // Only update if the option is available for sale
                  if (clickedButton && !clickedButton.disabled) {
                    setIsPending(true);
                    const newState = updateOption(optionNameLowerCase, value);
                    updateURL(newState);
                  }
                }}
              />
            </Column>
          )
        })}
      </Column>
      
      <Dialog
        ref={dialogRef}
        isOpen={isSizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        title="Size Guide"
        maxWidth={(productHandle && productHandle in sizeGuide && sizeGuide[productHandle as keyof typeof sizeGuide]?.image) ? 64 : undefined}
        description="Please use these measurements as a guide to find your perfect fit."
      >
          <Row fillWidth gap="24" mobileDirection="column" vertical="center">
            {productHandle && productHandle in sizeGuide && 
              sizeGuide[productHandle as keyof typeof sizeGuide].image && 
              <Media 
                marginTop="24" 
                aspectRatio="1/1" 
                maxWidth={24} 
                src={sizeGuide[productHandle as keyof typeof sizeGuide].image}
              />
            }
            <Column fillWidth gap="8">
              <Row fillWidth horizontal="end">
                <SegmentedControl
                  maxWidth={14}
                  buttons={[
                    { value: 'in', children: 'Inches' },
                    { value: 'cm', children: 'Centimeters' }
                  ]}
                  selected={measurementUnit}
                  onToggle={(value) => setMeasurementUnit(value as 'in' | 'cm')}
                  fillWidth
                />
              </Row>
              <Table data={formatSizeGuideForTable()} />
            </Column>
          </Row>
      </Dialog>
    </>
  );
}