import { Providers } from '@/components/Providers';
import { RSCItem1 } from '@/components/RSCItem1';
import { RSCItem2 } from '@/components/RSCItem2';
import { TanStackItem1 } from '@/components/TanStackItem1';
import { TanStackItem2 } from '@/components/TanStackItem2';
import { Suspense } from 'react';

export default function Page() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <p className="font-bold">React Server Components</p>
      <Suspense fallback={<div>loading 1</div>}>
        <RSCItem1 />
      </Suspense>
      <Suspense fallback={<div>loading 2</div>}>
        <RSCItem2 />
      </Suspense>
      <p className="font-bold">Tan Stack Query</p>
      <Suspense fallback={<div>loading 1</div>}>
        <TanStackItem1 />
      </Suspense>
      <Suspense fallback={<div>loading 2</div>}>
        <TanStackItem2 />
      </Suspense>
    </div>
  );
}
