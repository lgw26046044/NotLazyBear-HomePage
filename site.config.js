module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '8c6d8027188247e2b72b0bea9bb6dd8b',


  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '不懒熊-树屋',
  domain: 'https://torch-wallflower-96a.notion.site/HomePage-8c6d8027188247e2b72b0bea9bb6dd8b',
  author: '不懒熊',

  // open graph metadata (optional)
  description: '该站点用于记录自己的个人计划、心得经验及资料的整理',
  socialImageTitle: '不懒熊',
  socialImageSubtitle: '欢迎👋,来看不懒熊🐻, 这里是日常生活记录, 包括: 个人计划、心得经验、资料整理等',

  // social usernames (optional)
  twitter: 'not_lazy_bear',
  github: 'lgw26046044',
  linkedin: 'not_lazy_bear',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
