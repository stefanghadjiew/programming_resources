'use client';

import { Navbar, Sidebar } from '@components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] m-auto">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};
