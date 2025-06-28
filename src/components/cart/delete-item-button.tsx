'use client';

import { IconButton } from '@once-ui-system/core';
import { removeItem } from '@/components/cart/actions';
import type { CartItem } from '@/lib/types';
import { useActionState } from 'react';

export function DeleteItemButton({
  item,
  optimisticUpdate
}: {
  item: CartItem;
  optimisticUpdate: any;
}) {
  const [message, formAction] = useActionState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const actionWithVariant = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, 'delete');
        await actionWithVariant();
      }}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <IconButton
        type="submit"
        size="s"
        variant="tertiary"
        tooltip="Remove"
        tooltipPosition="left"
        icon="close"
        aria-label="Remove cart item"
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
