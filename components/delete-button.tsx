'use client';

import { deleteNote } from '@/app/notes/action';

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      className='btn btn-sm btn-error'
      onClick={async () => {
        const ok = confirm('Delete this note?');
        if (ok) {
          await deleteNote(id);
        }
      }}
    >
      Delete
    </button>
  );
}
