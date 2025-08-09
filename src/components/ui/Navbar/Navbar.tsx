'use client';

import { signUserOut, useSession } from '@lib';
import { useRouter } from 'next/navigation';

import { Icons } from '@components';

const classes = {
  navbarWrapper: 'm-w-[1400px] m-auto py-[10px] mb-[100px]',
  navbar: 'py-[10px] flex justify-between',
  logo: 'text-gray-500',
  navbarItems: 'flex gap-2 items-center',
  navbarItem:
    ' text-amber-400 opacity-65 hover:opacity-100 transition-opacity duration-200 font-bold px-1 cursor-pointer',
  logoutButton: 'bg-gray-500 px-2 py-1 rounded text-amber-400 font-bold cursor-pointer'
};

export const Navbar = () => {
  const router = useRouter();
  const { data } = useSession();

  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <Icons.Study className="cursor-pointer" />
        </div>
        <ul className={classes.navbarItems}>
          <li className={classes.navbarItem}>Item 1</li>
          <li className={classes.navbarItem}>Item 2</li>
          <li className={classes.navbarItem}>Item 3</li>
          {data?.session && (
            <button onClick={() => signUserOut(() => router.push('/login'))} className={classes.logoutButton}>
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
