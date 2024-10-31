import Providers from '@/components/Providers';
import { QueryClient } from '@tanstack/react-query';
import { Product1 } from '../../components/Product1';
import { Product2 } from '../../components/Product2';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <Providers>
      <div className="flex flex-col gap-2">
        <p>Test</p>
        <Product1 />
        <Product2 />
        <div>Testing</div>
      </div>
    </Providers>
  );
}
