'use client';

import { updateItemQuantity } from '@/components/cart/actions';
import type { CartItem } from '@/lib/types';
import { IconButton } from '@once-ui-system/core';
import { useActionState } from 'react';

function SubmitButton({ type }: { type: 'plus' | 'minus' }) {
  return (
    <IconButton
      type="submit"
      variant="secondary"
      size="s"
      icon={type === 'plus' ? 'plus' : 'minus'}
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
    />
  );
}

export function EditItemQuantityButton({
  item,
  type,
  optimisticUpdate
}: {
  item: CartItem;
  type: 'plus' | 'minus';
  optimisticUpdate: any;
}) {
  const [message, formAction] = useActionState(updateItemQuantity, null);
  const payload = {
    merchandiseId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form
      action={async () => {
        optimisticUpdate(payload.merchandiseId, type);
        await actionWithVariant();
      }}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <SubmitButton type={type} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
