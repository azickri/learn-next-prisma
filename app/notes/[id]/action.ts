'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function updateNote(formData: FormData) {
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await prisma.note.update({
    where: { id },
    data: {
      title,
      content,
    },
  });

  redirect('/notes');
}
