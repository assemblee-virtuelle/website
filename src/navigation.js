import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: "L'association",
      links: [
        {
          text: "Raison d'être et code social",
          href: '/documents/https%3A%2F%2Fdata.virtual-assembly.org%2Fdocuments%2F7bc5eb12-3772-4cad-b14f-ca90966e4810',
        },
        {
          text: 'Organisations membres',
          href: '/organisations',
        },
        {
          text: 'Histoire',
          href: '/documents/https%3A%2F%2Fdata.virtual-assembly.org%2Fdocuments%2F6d255935-1515-495a-95c1-d458d6aaee22',
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
      text: 'Actualités',
      links: [
        {
          text: 'Blog',
          href: '/blog',
        },
      ],
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
        {
          text: 'Matrix',
          href: 'https://matrix.to/#/#virtual_assembly:matrix.org',
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: "L'association",
      links: [
        { text: "Raison d'être et code social", href: '#' },
        { text: 'Organisations membres', href: '#' },
        { text: "L'équipe", href: '/organisations' },
        { text: 'Histoire', href: 'https://virtual-assembly.org/documents/https%3A%2F%2Fdata.virtual-assembly.org%2Fdocuments%2F6d255935-1515-495a-95c1-d458d6aaee22' },
      ],
    },
    {
      title: 'Projets',
      links: [
        { text: 'Applications', href: '/projets/applications' },
        { text: 'Ontologies', href: '/projets/ontologies' },
        { text: 'Méthodologies', href: '/projets/methodologies' },
        { text: 'Innovations sociales', href: '/projets/innovations-sociales' },
      ],
    },
    {
      title: 'Actualités',
      links: [{ text: 'Blog', href: '/blog' }],
    },
    {
      title: 'Communauté',
      links: [
        { text: 'Forum', href: 'https://forums.assemblee-virtuelle.org/' },
        { text: 'Chat', href: 'https://forums.assemblee-virtuelle.org/chat/c/general/6' },
        { text: 'PeerTube', href: 'https://peertube.virtual-assembly.org/' },
        { text: 'GitHub', href: 'https://github.com/assemblee-virtuelle/' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: '#' },
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/assemblee-virtuelle' },
  ],
  footNote: `
    Crée avec <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://astro.build/">Astro</a> et <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://archipel.assemblee-virtuelle.org">des données sémantiques</a>.
  `,
};
