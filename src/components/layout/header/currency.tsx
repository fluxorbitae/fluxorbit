'use client';

import { Button, Column, DropdownWrapper, Option } from "@once-ui-system/core";

const Currencies = [
  {label: 'USD', value: 'USD'},
  {label: 'EUR', value: 'EUR'},
  {label: 'GBP', value: 'GBP'},
  {label: 'CAD', value: 'CAD'},
  {label: 'AUD', value: 'AUD'},
  {label: 'JPY', value: 'JPY'},
];

export function CurrencySelector({ currency }: { currency: string; }) {
  const selectedCurrency = currency;

  const handleSelect = (currency: string) => {
    // navigate to the current page with the new currency as query param
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('currency', currency);
    window.history.pushState({}, '', `${window.location.pathname}?${newParams}`);
    window.location.reload();
  }

  return (
    <DropdownWrapper
      minWidth={6}
      dropdown={
        <Column padding="4" gap="2">
          {Currencies.map((currency) => (
            <Option key={currency.value} onClick={() => handleSelect(currency.value)} label={currency.label} value={currency.value}/>
          ))}
        </Column>
      }
      trigger={
        <Button
          variant="tertiary"
          size="s"
          label={selectedCurrency}>
        </Button>
      }>
    </DropdownWrapper>
  );
}
