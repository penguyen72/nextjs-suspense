'use server';

import { unstable_noStore } from 'next/cache';

export async function getData1() {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return 'item 1';
}

export async function getData2() {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return 'item 2';
}
