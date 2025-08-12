'use client';

import { signUserOut, useSession } from '@lib';
import { useRouter } from 'next/navigation';

import { Icons } from '@components';

export const LogoutButton = () => {
  const router = useRouter();
  const { data } = useSession();

  if (!data?.session) {
    return null;
  }
  const handleLogout = () => signUserOut(() => router.push('/login'));

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-500 px-2 py-1 rounded-full text-amber-400 font-bold cursor-pointer max-w-[3rem] max-h-[3rem] mx-auto flex items-center"
    >
      <Icons.Logout />
    </button>
  );
};
