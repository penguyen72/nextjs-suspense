import { getData2 } from '../app/actions';

export async function RSCItem2() {
  const data = await getData2();
  return <div>{data}</div>;
}
