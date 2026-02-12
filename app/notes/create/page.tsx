import { createNote } from './action';

import SubmitButton from '@/components/submit-button';

export default function NotesCreatePage() {
  return (
    <div className='max-w-md h-dvh flex justify-center items-center mx-auto'>
      <div className='w-full rounded-xl p-10 bg-neutral-900 flex flex-col gap-10'>
        <div className='text-center font-bold text-lg'>Create Notes</div>

        <div>
          <form action={createNote} className='w-full flex flex-col gap-5'>
            <div className='w-full flex flex-col gap-1'>
              <div className='text-sm text-neutral-500'>Title</div>
              <label className='w-full input'>
                <input type='text' placeholder='Title' name='title' required />
              </label>
            </div>

            <div className='w-full flex flex-col gap-1'>
              <div className='text-sm text-neutral-500'>Content</div>
              <textarea
                className='w-full textarea'
                name='content'
                placeholder='Content'
                required
              ></textarea>
            </div>

            <SubmitButton label='Create' labelLoading='Creating...' />
          </form>
        </div>
      </div>
    </div>
  );
}
