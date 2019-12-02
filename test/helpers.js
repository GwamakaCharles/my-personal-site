const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Gwamaka C. Mwamwaja',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Gwamaka C. Mwamwaja',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Gwamaka C. Mwamwaja',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Gwamaka C. Mwamwaja',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Gwamaka C. Mwamwaja',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
