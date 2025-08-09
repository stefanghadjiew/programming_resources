'use client';

import { signUserOut, useSession } from '@lib';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
  const router = useRouter();
  const { data } = useSession();

  if (!data?.session) {
    return null;
  }

  return (
    <button
      onClick={() => signUserOut(() => router.push('/login'))}
      className="bg-gray-500 px-2 py-1 rounded text-amber-400 font-bold cursor-pointer"
    >
      Logout
    </button>
  );
};
