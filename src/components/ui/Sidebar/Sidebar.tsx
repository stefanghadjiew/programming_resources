import { clsx } from 'clsx';

export const SIDEBAR_LINKS = {
  PROGRAMMING: {
    REACT: 'React',
    JAVASCRIPT: 'Javascript',
    HTML: 'HTML',
    CSS: 'CSS',
    NEXTJS: 'NextJS',
    NODEJS: 'NodeJS',
    TYPESCRIPT: 'Typescript',
    DOCKER: 'Docker',
    BUILDTOOLS: 'Buildtools',
    GIT: 'Git',
    DEPLOYMENTS: 'Deployments',
    LIBRARIES: 'Libraries',
    ARTICLES: 'Articles',
    CICD: 'CI / CD'
  },
  BOOKS: {
    ADVENTURE: 'Adventure',
    PHYSICS: 'Physics',
    MATHEMATICS: 'Mathematics'
  },
  OTHER: {
    TEST: 'Other 1',
    TEST2: 'Other 2',
    TEST3: 'Other 3'
  }
} as const;

const classes = {
  sidebarWrapper: clsx(
    'relative bg-[080808] min-h-[calc(100dvh-77px)] flex flex-col relative text-gray-500 min-w-[200px] w-[230px]'
  ),
  sidebarLinksWrapper: clsx('text-amber-400 font-bold flex flex-col gap-2'),
  sidebarLinksWrapperList: clsx('flex flex-col gap-2 pl-[24px] border-l-2 border-gray-500'),
  link: clsx(
    'text-amber-400  py-1 cursor-pointer opacity-65 hover:opacity-100 transition-opacity duration-200 font-bold'
  )
};

export const Sidebar = () => {
  const renderSidebarLinks = Object.entries(SIDEBAR_LINKS).map(([title, resources]) => (
    <div key={title} className={classes.sidebarLinksWrapper}>
      {title}
      <ul className={classes.sidebarLinksWrapperList}>
        {Object.values(resources).map((resource) => (
          <li key={resource} className={classes.link}>
            {resource}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className={classes.sidebarWrapper}>
      <ul className="flex flex-col gap-2 px-[10px]">{renderSidebarLinks}</ul>
    </div>
  );
};
