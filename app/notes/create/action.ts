'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createNote(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await prisma.note.create({
    data: {
      title,
      content,
    },
  });

  redirect('/notes');
}
