import { Note } from '@prisma/client';

import Link from 'next/link';
import DeleteButton from '../delete-button';

export default function ListNote({ notes }: { notes: Note[] }) {
  return (
    <div className='w-full flex flex-col gap-3'>
      {notes.map((note) => {
        return (
          <div
            className='w-full bg-neutral-800 p-5 rounded-xl flex flex-col relative'
            key={note.id}
          >
            <div className='font-bold'>{note.title}</div>
            <div className='opacity-80'>{note.content}</div>

            <div className='absolute top-3 right-3 flex items-center gap-2'>
              <Link className='btn btn-sm' href={`/notes/${note.id}`}>
                Edit
              </Link>
              <DeleteButton id={note.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
