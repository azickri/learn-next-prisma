'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  label,
  labelLoading,
}: {
  label: string;
  labelLoading: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className='btn btn-primary btn-block'
      type='submit'
      disabled={pending}
    >
      {pending ? labelLoading : label}
    </button>
  );
}
