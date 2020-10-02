module.exports = {
  title: 'Maurici Abad',
  description: 'Personal website of Maurici Abad Gutierrez, a Software Engineer in Barcelona. It contains information about him, projects and blog posts.',
  lang: 'en-GB',
  base: '/',
  dest: 'public',
  logo: './assets/img/logo.svg',
  theme: require.resolve('../../'),
  head: [
    ['link', { rel: 'manifest', href: '/site.webmanifest'}],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'}],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#6877ff'}],
    ['link', { rel: 'shortcut icon', href: '/icons/favicon.ico'}],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Maurici'}],
    ['meta', { name: 'application-name', content: 'Maurici'}],
    ['meta', { name: 'msapplication-TileColor', content: '#6877ff'}],
    ['meta', { name: 'msapplication-config', content: '/icons/browserconfig.xml'}],
    ['meta', { name: 'theme-color', content: '#ffffff'}],
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      { 'ga': 'UA-100348659-1' },
    ], [
      '@vuepress/pwa',
      { serviceWorker: true, updatePopup: true },
    ]
  ],
  themeConfig: {
  authors: [
      {
      name: 'Maurici Abad',
      avatar: '/assets/img/profile-pic-mauriciabad.png',
      link: 'https://mauriciabad.com',
      linktext: 'Website',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: 'https://codepen.com/mauriciabad',
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/mauriciabad',
        },
        {
          type: 'github',
          link: 'https://github.com/mauriciabad',
        },
        {
          type: 'instagram',
          link: 'https://ginstagram.com/mauriciabad',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com/mauriciabad',
        },
        {
          type: 'mail',
          link: 'hello@mauriciabad.com',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/mauriciabad',
        },
        {
          type: 'web',
          link: 'https://mauriciabad.com',
        }
      ],
    },

    sitemap: {
      hostname: 'https://mauriciabad.com/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    feed: {
      canonical_base: 'https://mauriciabad.com/',
    },
    smoothScroll: true
  },
}
