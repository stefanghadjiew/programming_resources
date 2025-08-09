import { clsx } from 'clsx';

// TODO: Will need to get the sidebarlinks from the database

const sidebarLinks = ['Javascript', 'ReactJS', 'NodeJS', 'CSS', 'NextJs'];

const classes = {
  sidebarWrapper: clsx(
    'relative bg-[080808] min-h-[calc(100dvh-74px)] flex flex-col relative text-gray-500 border-r-2 border-gray-500 min-w-32 max-w-[fit-content]'
  ),
  link: clsx(
    'text-amber-400 px-2 py-1 cursor-pointer opacity-65 hover:opacity-100 transition-opacity duration-200 font-bold'
  )
};

export const Sidebar = () => {
  const renderSidebarLinks = sidebarLinks.map((link) => (
    <li key={link} className={classes.link}>
      {link}
    </li>
  ));

  return (
    <div className={classes.sidebarWrapper}>
      <ul className="flex flex-col gap-2">
        {renderSidebarLinks}
        <button className="p-1 rounded cursor-pointer border-2 border-gray-500 font-bold">+ folder</button>
      </ul>
    </div>
  );
};
