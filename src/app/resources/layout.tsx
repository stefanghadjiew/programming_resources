/* import { auth } from '@lib'; */
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { ConvexClientProvider, Layout } from '@components';

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // TODO use auth.api.getSession when #2055 is fixed
  const headersList = await headers();
  const cookie = headersList.get('cookie');

  const session = await fetch(`${process.env.BETTER_AUTH_URL}/api/auth/get-session`, {
    headers: {
      'Content-Type': 'application/json',
      cookie: cookie ?? ''
    }
  }).then((res) => res.json());

  if (!session) {
    redirect('/login');
  }

  return (
    <ConvexClientProvider>
      <Layout>{children}</Layout>
    </ConvexClientProvider>
  );
}
