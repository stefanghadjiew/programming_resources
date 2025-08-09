import { ConvexClientProvider, Layout } from '@components';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConvexClientProvider>
      <Layout>{children}</Layout>
    </ConvexClientProvider>
  );
}
