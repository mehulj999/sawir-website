import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/Logo.svg'

export default defineThemeConfig({
  name: 'South Asian Women in Rare',
  id: 'south-asian-women-in-rare',
  logo: logoImage,
  seo: {
    title: 'Accessible Astro Starter',
    description:
      'A space for women from South Asia to get to share their experiences, journeys and insights of having a person in their life or living with a rare disease',
    author: 'Mehul Dinesh Jain',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  // colors: {
  //   primary: '#d648ff',
  //   secondary: '#00d1b7',
  //   neutral: '#b9bec4',
  //   outline: '#ff4500',
  // },
  colors: {
    primary: '#e6a23c',//  yellow #e6a23c
    secondary: '#1f6f6b',// Green #1f6f6b
    neutral: '#b9bec4',// Maroon #651f40
    outline: '#000000',// Black #000000
  },

  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'Portfolio',
        href: '/portfolio',
      },
      {
        label: 'Features',
        type: 'dropdown',
        items: [
          {
            label: 'Accessibility statement',
            href: '/accessibility-statement',
          },
          {
            label: 'Accessible components',
            href: '/accessible-components',
          },
          {
            label: 'Accessible launcher',
            href: '/accessible-launcher',
          },
          {
            label: 'Color contrast checker',
            href: '/color-contrast-checker',
          },
          {
            label: 'Markdown page',
            href: '/markdown-page',
          },
          {
            label: 'MDX page',
            href: '/mdx-page',
          },
          {
            label: '404 page',
            href: '/404',
          },
          {
            label: 'Sitemap',
            href: '/sitemap',
          },
        ],
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      // {
      //   type: 'link',
      //   label: 'Go to our GitHub page, opens in new tab',
      //   href: 'https://github.com/incluud/accessible-astro-starter',
      //   icon: 'lucide:github',
      //   external: true,
      //   excludeFromLauncher: true,
      // },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/incluud/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/incluud.dev',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})
