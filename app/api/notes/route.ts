import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json({ docs: notes });
}
