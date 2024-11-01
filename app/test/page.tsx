'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { getData } from '../functions';

function MyComponent(props: { wait: number }) {
  const { data } = useSuspenseQuery({
    queryKey: ['wait', props.wait],
    queryFn: async () => getData(props.wait),
  });

  return <div>result: {data}</div>;
}

export default function MyPage() {
  return (
    <>
      <Suspense fallback={<div>waiting 100....</div>}>
        <MyComponent wait={1000} />
      </Suspense>
      <Suspense fallback={<div>waiting 200....</div>}>
        <MyComponent wait={2000} />
      </Suspense>
      <Suspense fallback={<div>waiting 300....</div>}>
        <MyComponent wait={3000} />
      </Suspense>
      <Suspense fallback={<div>waiting 400....</div>}>
        <MyComponent wait={4000} />
      </Suspense>
      <Suspense fallback={<div>waiting 500....</div>}>
        <MyComponent wait={5000} />
      </Suspense>
      <Suspense fallback={<div>waiting 600....</div>}>
        <MyComponent wait={6000} />
      </Suspense>
      <Suspense fallback={<div>waiting 700....</div>}>
        <MyComponent wait={7000} />
      </Suspense>

      <fieldset>
        <legend>
          combined <code>Suspense</code>-container
        </legend>
        <Suspense
          fallback={
            <>
              <div>waiting 800....</div>
              <div>waiting 900....</div>
              <div>waiting 1000....</div>
            </>
          }
        >
          <MyComponent wait={8000} />
          <MyComponent wait={9000} />
          <MyComponent wait={10000} />
        </Suspense>
      </fieldset>
    </>
  );
}
