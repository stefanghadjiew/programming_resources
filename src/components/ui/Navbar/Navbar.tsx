'use client';

import { clsx } from 'clsx';

import { Icons } from '@components';

const classes = {
  navbarWrapper: clsx('m-w-[1400px] m-auto py-[10px] mb-[100px]'),
  navbar: clsx('py-[10px] flex justify-between'),
  logo: clsx('text-gray-500'),
  navbarItems: 'flex gap-2 items-center',
  navbarItem:
    ' text-amber-400 opacity-65 hover:opacity-100 transition-opacity duration-200 font-bold px-1 cursor-pointer'
};

export const Navbar = () => {
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
        </ul>
      </div>
    </div>
  );
};
