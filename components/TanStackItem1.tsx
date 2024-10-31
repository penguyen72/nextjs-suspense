'use client';

import { useQuery } from '@tanstack/react-query';
import { getData1 } from '../app/actions';

export function TanStackItem1() {
  const { data } = useQuery({
    queryKey: ['item1'],
    queryFn: () => getData1(),
  });

  return <div>{data}</div>;
}
