[![Netlify Status](https://api.netlify.com/api/v1/badges/8c96549c-247a-4747-8ed9-bf05a38f993e/deploy-status)](https://app.netlify.com/sites/vigorous-nightingale-ef0318/deploys)

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
- [ ] Set env variables in netlify
- [ ] Accessibility

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


##### External services

Leaving this section until all external services are setup or deleted

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

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
