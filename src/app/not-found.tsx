'use client';

import { BackToHomeButton } from '@components';

export default function NotFound() {
  return (
    <div className="h-[100dvh] bg-[#080808] flex items-center justify-center flex-col gap-4">
      <div className="flex">
        <h1 className="text-[2rem] font-bold pr-5 mr-5 text-amber-400 border-r-2 border-gray-500">404</h1>
        <div className="text-[1.5rem] flex items-center text-amber-400">The requested page could not be found</div>
      </div>
      <BackToHomeButton />
    </div>
  );
}
