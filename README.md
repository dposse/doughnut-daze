### TODO
- [X] Update colors in header when at the top of the page
- [X] Change footer
  - [X] Replace placeholder icon with ghost bunny icon
- [X] Change background under hero
- [X] Hide logo while hero is on top
- [X] Remove all posts except for one
- [X] Set last post to placeholder post
- [X] Add twitter icon
- [X] Edit initial post
  - [X] Change post template to only show a youtube video on landing page
- [ ] Center logo in hero
- [ ] Change site preview - unsure why when sharing site through text still showing old preview
- [X] content/meta/config.js - change siteUrl when we have custom domain
- [ ] content/meta/config.js - change siteImage to a jpg of finished site
- [X] content/meta/config.js - set twitter handle
- [X] content/meta/config.js - set instagram handle
- [ ] content/meta/config.js - set youtube handle
- [ ] Change the rest of the readme or delete?

### Bugs
- [X] When shared by text, goes to doughnut-daze.com/undefinedundefined

### low priority
- [X] Add google analytics
- [ ] Fix header on post pages - doesn't match landing page where logo is hidden when scrolled to the top
- [ ] Revert post template and create a separate video template
- [ ] Remove algolia
- [ ] Check facebook integration, either implement or remove
- [ ] Update class based to hook based
- [ ] Fix gatsby, react warnings



# HeroBlog

A [GatsbyJS](https://www.gatsbyjs.org/) blog starter. <br /><br />

[![GitHub tag](https://img.shields.io/github/tag/greglobinski/gatsby-starter-hero-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog)
[![GitHub stars](https://img.shields.io/github/stars/greglobinski/gatsby-starter-hero-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog/stargazers)
[![GitHub license](https://img.shields.io/github/license/greglobinski/gatsby-starter-hero-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![GitHub contributors](https://img.shields.io/github/contributors/greglobinski/gatsby-starter-hero-blog.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/greglobinski/gatsby-starter-hero-blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fgreglobinski%2Fgatsby-starter-hero-blog)

  <br />

![](static/screens/gatsby-starter-hero-blog.gif) <br />

  <br />

See the starter in action » [demo website](https://gatsby-starter-hero-blog.greglobinski.com/) <br />For more information visit » [dev.greglobinski.com/gatsby-starter-hero-blog](https://dev.greglobinski.com/gatsby-starter-hero-blog/)

## Description

A ready to use, easy to customize 'like theme' starter with a 'Hero' section on the home page.

The starter was initially built for Gatsby v1. Now, thanks to [@mohsenkhanpour](https://github.com/mohsenkhanpour) it's [upgraded](https://github.com/greglobinski/gatsby-starter-hero-blog/issues/32) to Gatsby v2. Thank you Mohsen :)

The original version of the starter is preserved as the branch `gatsby-v1`.

## Features:

- Easy editable content in **Markdown** files (posts, pages and parts)
- **CSS** with `styled-jsx` and `PostCSS`
- **SEO** (sitemap generation, robot.txt, meta and OpenGraph Tags)
- **Social** sharing (Twitter, Facebook, Google, LinkedIn)
- **Comments** (Facebook)
- **Images** lazy loading and `webp` support (gatsby-image)
- Post **categories** (category based post list)
- Full text **searching** (Algolia)
- **Contact** form (Netlify form handling)
- Form elements and validation with `ant-design`
- **RSS** feed
- 100% **PWA** (manifest.webmanifest, offline support, favicons)
- Google **Analytics**
- App **favicons** generator (node script)
- Easy customizable base **styles** via `theme` object generated from `yaml` file (fonts, colors, sizes)
- React **v.16.3** (gatsby-plugin-react-next)
- **Components** lazy loading (social sharing)
- **ESLint** (google config)
- **Prettier** code styling
- Webpack `BundleAnalyzerPlugin`
- **Gravatar** image (optional) instead local Avatar/Logo image

## Prerequisites

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

## Getting started

Install the starter using Gatsby Cli `gatsby new` command.

```text
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] https://github.com/greglobinski/gatsby-starter-hero-blog.git
```

Go into the newly created directory and run

```text
gatsby develop
```

to hot-serve your website on http://localhost:8000 or

```text
gatsby build
```

to create static site ready to host (/public).

##### External services

The starter uses external services for some functions: comments, searching, analytics. To use them you have to secure some access data. All services are free to use or have generous free tiers big enough for a personal blog.

Create an `.env` file like below in the root folder. Change `...` placeholders with real data.
<br />By default, your `.env` file will be ignored by git. Remove `.env` from `.gitignore` in order to be able to push the file to your repository.

```text
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
FB_APP_ID=...
```

### Instructions & tutorials

- [How to install, setup and add new content to a Blog starter](https://dev.greglobinski.com/install-blog-starter/)
- [Setup Algolia account for your GatsbyJS blog](https://dev.greglobinski.com/setup-algolia-account/)
- More articles at [Front-end web development with Greg](https://dev.greglobinski.com/)

## Windows users

You should take a look at this: [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)

## Authors

- Greg Lobinski [@greglobinski](https://github.com/greglobinski)

See also the list of [contributors](https://github.com/greglobinski/gatsby-starter-personal-blog/graphs/contributors) who participated in this project.

## Contributing

- Fork the repo
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -am 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
