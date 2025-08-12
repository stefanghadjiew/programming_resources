'use client';

import { useRouter } from 'next/navigation';

import { Icons } from '@components';

export const BackToHomeButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="bg-gray-500 px-2 py-1 rounded-full text-amber-400 font-bold cursor-pointer max-w-[3rem] max-h-[3rem] mx-auto flex items-center"
    >
      <Icons.BackToHome />
    </button>
  );
};
