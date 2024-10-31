'use client';

import { useQuery } from '@tanstack/react-query';
import { getData2 } from '../app/actions';

export function TanStackItem2() {
  const { data } = useQuery({
    queryKey: ['item2'],
    queryFn: () => getData2(),
  });
  return <div>{data}</div>;
}
