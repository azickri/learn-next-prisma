'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteNote(id: string) {
  await prisma.note.delete({
    where: { id },
  });

  revalidatePath('/notes');
}
