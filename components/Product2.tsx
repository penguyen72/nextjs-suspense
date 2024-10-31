'use client';

import { useQuery } from '@tanstack/react-query';
import { getData2 } from '../app/actions';

export function Product2() {
  const { data } = useQuery({
    queryKey: ['product2'],
    queryFn: () => getData2(),
  });
  return <div>{data}</div>;
}
