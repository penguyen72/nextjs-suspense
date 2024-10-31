import { getData1 } from '../app/actions';

export async function RSCItem1() {
  const data = await getData1();
  return <div>{data}</div>;
}
