import type { Category, Project } from '../../models/projects.interface';
import { CATEGORY_DATA as cat } from '../../models/projects.interface';

export const PROJECT_DATA: Project[] = [
  {
    name: 'Developer Navigator Host Portal',
    description: `
    This large project was a ground up rewrite of the host portal of our Developer Navigator 
    product internally. Originally in vanilla web components with no framework, and very dated technology, 
    this project was a huge effort to move as customers (developers) were using it actively every day. 
    This is a Frontend for developers to use to onboard systems from Web Applications, to APIs, and entire scaffoldings of projects. 
    This host portal had to be scaled in way that innersourcing was fast and efficient, housing 17+ Micro Frontends.
    `,
    image: {
      src: '/assets/images/code-logo.svg',
      alt: 'code logo',
    },
    link: '/',
    category: [
      cat.litElement as Category,
      cat.typeScript as Category,
      cat.webComponents as Category,
      cat.performance as Category,
      cat.mfeArchitecture as Category,
      cat.testCoverage as Category,
    ],
  },
  {
    name: 'DevNav Shared SDK',
    description: `The Shared SDK was pivotal in delivering the previous Host Portal project efficiently.
     Built with Nx, Yarn Workspaces, Lit Element, TypeScript, and Changesets, this published to our 
     internal artifactory for consumption across multiple teams to deliver a clear and concise experience 
     across the board. These shared components allowed developers building MFEs the ability to move 
     quickly and efficiently. This project's test coverage is 99.9% covered across more than 30+
      shared components in this monorepo.`,
    image: {
      src: '/assets/images/code-logo.svg',
      alt: 'code logo',
    },
    link: '/',
    category: [
      cat.nx as Category,
      cat.storybook as Category,
      cat.litElement as Category,
      cat.typeScript as Category,
      cat.webComponents as Category,
      cat.testCoverage as Category,
    ],
  },
  {
    name: `This Project! This site you're on right now!`,
    description: `Sort of a portfolio/blog/digital resume for all of my brain dumping and project collections. 
    I needed a better way to showcase my work; my last portfolio site was old and dated and it was time for some new technology. 
    This site is built with astro, react components, and a few Lit components sprinkled in. 
    Deployed with netlify and hosted on my own personal domain.`,
    image: {
      src: '/assets/images/hey-sunglasses.png',
      alt: 'Quin Carter Bitmoji',
    },
    link: 'https://quincarter.com',
    category: [
      cat.astro as Category,
      cat.react as Category,
      cat.litElement as Category,
      cat.typeScript as Category,
      cat.webComponents as Category,
    ],
  },
  {
    name: `Capital One Auto Refinance`,
    description: `This is the customer facing site that pipes into the agent platform I supported internally.
     Any refinance that happened, went through this page and then through VOLT.`,
    image: {
      src: '/assets/images/capitalone-logo.svg',
      alt: 'capitalone auto refi',
    },
    link: 'https://www.capitalone.com/auto-financing/refinance/',
    category: [
      cat.angular as Category,
      cat.litElement as Category,
      cat.javascript as Category,
      cat.typeScript as Category,
      cat.webComponents as Category,
      cat.performance as Category,
    ],
  },
  {
    name: `Brew Me App`,
    description: `This is a hobby project that turned into something much larger. 
    It's a simple application that I started out of necessity to calculate accurate 
    coffee brews with my Chemex. I found out later that all coffee methods needed exact 
    measurements for consistency across the board. I have productionized this application 
    and shared it in my old facebook groups and on r/espresso and r/coffee. 
    It's taken on about 2000 daily active users and people seem to love this thing. 
    I do my best to support it in my free time. I have a redesign of it stashed on my 
    local but I have not had time lately to work on it.`,
    image: {
      src: '/assets/images/brew-me-icon.png',
      alt: 'brewme icon',
    },
    link: 'https://brewme.app',
    category: [
      cat.angular as Category,
      cat.ionicFramework as Category,
      cat.litElement as Category,
      cat.typeScript as Category,
      cat.webComponents as Category,
    ],
  },
];
