'use client';

import { SVGProps } from 'react';

import { useRouter } from 'next/navigation';

function BaselineArrowCircleLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2.5rem" height="2.5rem" {...props}>
      <path
        fill="currentColor"
        d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12m10-1h4v2h-4v3l-4-4l4-4z"
      ></path>
    </svg>
  );
}

export const BackToHomeButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="bg-gray-500 px-2 py-1 rounded-full text-amber-400 font-bold cursor-pointer max-w-[3rem] max-h-[3rem] mx-auto flex items-center"
    >
      <BaselineArrowCircleLeft />
    </button>
  );
};
