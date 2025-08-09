'use client';

import { Navbar, Sidebar } from '@components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] m-auto">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-grow justify-center">
          <div className="max-w-[625px] px-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
