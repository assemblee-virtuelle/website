import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: "L'association",
      links: [
        {
          text: "Statuts, raison d'être, code social",
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Organisations membres',
          href: getPermalink('/organisations'),
        },
        {
          text: "L'équipe",
          href: getPermalink('/equipe'),
        },
        {
          text: 'Histoire',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Projets',
      links: [
        {
          text: 'Applications',
          href: '/projets/applications',
        },
        {
          text: 'Ontologies',
          href: '/projets/ontologies',
        },
        {
          text: 'Méthodologies',
          href: '/projets/methodologies',
        },
        {
          text: 'Innovations sociales',
          href: '/projets/innovations-sociales',
        },
      ],
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Communauté',
      links: [
        {
          text: 'Forum',
          href: 'https://forums.assemblee-virtuelle.org',
        },
        {
          text: 'Chat',
          href: 'https://forums.assemblee-virtuelle.org/chat',
        },
        {
          text: 'Peertube',
          href: 'https://peertube.virtual-assembly.org/',
        },
        {
          text: 'GitHub',
          href: 'https://github.com/assemblee-virtuelle',
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: "L'association",
      links: [
        { text: 'Statuts', href: '#' },
        { text: 'Organisations membres', href: '#' },
        { text: 'Equipe', href: '#' },
        { text: 'Histoire', href: '#' },
      ],
    },
    {
      title: 'Projets',
      links: [
        { text: 'Applications', href: '#' },
        { text: 'Ontologies', href: '#' },
        { text: 'Méthodologies', href: '#' },
        { text: 'Innovations sociales', href: '#' },
      ],
    },
    {
      title: 'Actualités',
      links: [
        { text: 'Blog', href: '#' },
        { text: 'Evénements', href: '#' },
      ],
    },
    {
      title: 'Communauté',
      links: [
        { text: 'Forum', href: '#' },
        { text: 'Chat', href: '#' },
        { text: 'PeerTube', href: '#' },
        { text: 'GitHub', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/assemblee-virtuelle.org' },
  ],
  footNote: `
    Crée avec <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://astro.build/">Astro</a> et <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://archipel.assemblee-virtuelle.org">des données sémantiques</a>.
  `,
};
