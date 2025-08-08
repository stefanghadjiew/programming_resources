'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const sidebarLinks = ['Javascript', 'ReactJS', 'NodeJS', 'CSS', 'NextJs'];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const renderSidebarLinks = sidebarLinks.map((link) => (
    <li key={link} className="text-amber-400">
      {link}
    </li>
  ));

  return (
    <motion.div
      initial={false}
      animate={{ width: isOpen ? '16rem' : '4rem' }} // ✅ animate width based on state
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-[080808] min-h-[100dvh] flex flex-col relative text-gray-500 border-r-2 border-gray-500 p-4"
    >
      <ul>{renderSidebarLinks}</ul>
      <button className="py-2 px-4 rounded cursor-pointer border-2 border-gray-500 font-bold">+ folder</button>

      <div className="absolute w-12 h-12 rounded-full bg-black z-10 right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
      <button
        onClick={toggleSidebar}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 px-3 py-1 rounded-full cursor-pointer border-3 border-gray-500 w-10 h-10 flex items-center justify-center z-20"
      >
        {'>'}
      </button>
    </motion.div>
  );
};
