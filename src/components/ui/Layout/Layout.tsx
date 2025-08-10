'use client';

import { Navbar, Sidebar } from '@components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-grow justify-center">
          <div className="max-w-[625px] px-6">{children}</div>
        </div>
        {/* TODO: Moove this in separate component*/}
        {/* <OnThisPage /> */}
        <div className="w-[200px]">
          <h1 className="font-bold text-amber-400 uppercase">On this page</h1>
        </div>
      </div>
    </>
  );
};
