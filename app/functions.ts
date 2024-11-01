import { unstable_noStore } from 'next/cache';

export async function getData(wait: number) {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, wait));
  return 'item 2';
}
