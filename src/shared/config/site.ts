export const SITE_CONFIG = {
  url: 'https://www.jonghwan.blog',
  title: 'jonghwan.blog',
  description: '꾸준한 성장을 위한 학습 여정을 기록합니다.',
  verification: {
    google: 'gcMBGXzga7cUGggqBJtPyZJAReVW04fpbIKSInIXVy0',
    naver: '55c6d6e8c4de17d5049260413c4105fe2fef1c19',
  },
  siteName: '장종환 개발 블로그',
  ogImage: '/opengraph.png',
  author: {
    username: 'Jonghwan',
    tagline: '꾸준한 성장을 위한 학습 여정을 기록합니다.',
    avatar: '/avatar.png',
  },
  social: {
    github: 'https://github.com/jonghwann',
    linkedin: 'https://linkedin.com/in/jonghwan',
  },
  giscus: {
    repo: 'jonghwann/jonghwan-nextjs-blog',
    repoId: 'R_kgDOQHGfog',
    category: 'Announcements',
    categoryId: 'DIC_kwDOQHGfos4Cw7z7',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    lang: 'ko',
  },
} as const;
