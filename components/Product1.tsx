'use client';

import { useQuery } from '@tanstack/react-query';
import { getData1 } from '../app/actions';

export function Product1() {
  const { data } = useQuery({
    queryKey: ['product1'],
    queryFn: () => getData1(),
  });

  return <div>{data}</div>;
}
