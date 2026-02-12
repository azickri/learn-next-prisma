import { prisma } from '@/lib/prisma';
import { updateNote } from './action';
import { notFound } from 'next/navigation';

import SubmitButton from '@/components/submit-button';

export default async function NotesEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await prisma.note.findUnique({
    where: { id },
  });

  if (!note) notFound();

  return (
    <div className='max-w-md h-dvh flex justify-center items-center mx-auto'>
      <div className='w-full rounded-xl p-10 bg-neutral-900 flex flex-col gap-10'>
        <div className='text-center font-bold text-lg'>Update Notes</div>

        <div>
          <form action={updateNote} className='w-full flex flex-col gap-5'>
            <input type='hidden' name='id' value={note.id} />

            <div className='w-full flex flex-col gap-1'>
              <div className='text-sm text-neutral-500'>Title</div>
              <label className='w-full input'>
                <input
                  type='text'
                  placeholder='Title'
                  name='title'
                  required
                  defaultValue={note.title}
                />
              </label>
            </div>

            <div className='w-full flex flex-col gap-1'>
              <div className='text-sm text-neutral-500'>Content</div>
              <textarea
                className='w-full textarea'
                name='content'
                placeholder='Content'
                required
                defaultValue={note.content}
              ></textarea>
            </div>

            <SubmitButton label='Update' labelLoading='Updating...' />
          </form>
        </div>
      </div>
    </div>
  );
}
