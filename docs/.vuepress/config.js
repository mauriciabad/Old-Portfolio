module.exports = {
  title: 'Maurici Abad',
  base: '/',
  dest: 'public',
  description: 'Personal website of Maurici Abad Gutierrez, a Software Engineer in Barcelona. It contains information about him, projects and blog posts.',
  logo: './assets/img/logo.svg',
  theme: require.resolve('../../'),
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
          type: 'gitlab',
          link: '#',
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
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
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
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://opensource.org/licenses/MIT',
        },
        {
          text: 'Made with ❤ by Maurici Abad',
          link: 'https://mauriciabad.com',
        },
      ],
    },

    sitemap: {
      hostname: 'https://mauriciabad.com/'
    },
    comment: {
      service: 'disqus',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: '#'
    },
    feed: {
      canonical_base: 'https://mauriciabad.com/',
    },
    smoothScroll: true
  },
}
