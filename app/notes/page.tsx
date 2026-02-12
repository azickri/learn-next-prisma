import { prisma } from '@/lib/prisma';

import Link from 'next/link';
import ListNote from '@/components/notes/list';
import EmptyNote from '@/components/notes/empty';

export default async function NotesPage() {
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className='max-w-md h-dvh flex justify-center items-center mx-auto'>
      <div className='w-full rounded-xl p-10 bg-neutral-900 flex flex-col gap-10'>
        <div className='w-full flex justify-between items-center'>
          <div className='text-center font-bold text-lg'>Notes App</div>
          <Link href='/notes/create' className='btn btn-primary btn-sm'>
            Create Note
          </Link>
        </div>

        {notes.length ? <ListNote notes={notes} /> : <EmptyNote />}
      </div>
    </div>
  );
}
