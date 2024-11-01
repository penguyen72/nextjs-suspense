'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { getData1 } from '../app/actions';

export function TanStackItem1() {
  const { data } = useSuspenseQuery({
    queryKey: ['item1'],
    queryFn: async () => getData1(),
  });

  return <div>{data}</div>;
}
