# Cenik Lab Website

Website for the Cenik Lab at the University of Texas at Austin, built using the Chirpy Jekyll Theme.

## Local Development Prerequisites
To develop locally you'll need to:
- Install [Jekyll](https://jekyllrb.com/docs/installation/) (which includes Ruby and bundler, Ruby's package manager)
- Install [Node.js version 18.x](https://nodejs.org/en/download). (Try earlier versions at your own risk, I had to update from 16.x to get it working.)
- Install Ruby dependencies with `bundle install`
- Install Node.js dependencies with `npm install`

Alternatively, you can try developing the site in a Docker devcontainer with VS Code. The associated configuration details are in this repo under [.devcontainer](.devcontainer), and essentially go through the above steps but inside a container.

### Serve the site in development
```
bundle exec jekyll serve
```
If you update the JS files for some reason to customize the theme, you might have to run an `npm run build` for your changes to propagate.

### Build the site for production
```
npm run build
bundle exec jekyll build
```
If you want to simulate a production build, make sure to set the production flag when building the Jekyll site. This will apply minifcation to the site files.
```
JEKYLL_ENV=production jekyll build
```

## Updating the site
`_posts` includes markdown files representing small pieces of news. These are currently displayed on the Home page.

`_alumni`, `_collaborators`, `_team`, `_research`, and `_publication` are site collections that keep track of data in markdown files similar to `_posts`

`_posts2` is a list of example posts that came with the theme. They are not deployed, but are simply in the repo for reference.

### Modifying layouts
`_layouts` control the actual templates that match up to each page. Here's an example of a newly added layout

```yaml
---
# when adding a new layout, you probably want to extend upon the page layout
layout: page 

# The theme does some weird refactoring to images. If it causes you problems, you can turn it off.
refactor: false

# By default, the content of the page sits in the middle, with a list of recently updated posts displayed on the right. If you set fullwidth to true, the content of the page will fill up the whole width.
fullwidth: true
---
```

### Modifying tabs
Tabs are controlled using the `_tabs` collection. The Chirpy theme did not originally support have nested subtabs, so this feature was implemented. Here's an example of a tab definition.

```yaml
---
# this represents the layout in _layouts to show for this page
layout: publications 

# this is the font awesome icon that shows in the sidebar
icon: fas fa-book-open 

# this is the ordering in the sidebar
order: 2 

# If a tab has subtabs define them here
# You must use the exact title of the subtab
sub_pages:
    - Selected Publications
    - Pubmed 
    - Google Scholar
---
```

Define each subtab in a seperate md file. In the subtab, you'll want to do some additional configuration. Let's look at the Pubmed subtab.

```yaml
---
# this ensures that the theme doesn't render this as a top level tab
hidden: true 

# order here doesn't really mean anything, but jekyll will complain if we don't specify an order here
order: -1 

# Title to display for the subtab. This must match with the listing in the sub_pages of the tab this is under.
title: Pubmed 

# Optionally, if you want the tab to link to an external site, add a link property
link: https://pubmed.ncbi.nlm.nih.gov/?term=cenik+c&sort=date
---
```

### Customizing the Site Theme
`_sass` contains styling for the site. If you want to modify or add CSS rules, look here.

`_javascript` contains some small bits of JS that initialize parts of the site. For example, I added a masonry grid plugin that needed to be initialized here. If you update these in development you'll need to run an `npm run build` to see your changes.

## Deploying the site
The site is built and deployed automatically to Github Pages upon a push to the master branch using Github Actions. [The build script](.github/workflows/pages-deploy.yml) essentially runs the JS and Jekyll build commands and deploys the site.

---


## Theme Documentation

To explore usage, development, and upgrade guide of the project, please refer to
the [Wiki][wiki].


[jekyllrb]: https://jekyllrb.com/
[bootstrap]: https://getbootstrap.com/
[icons]: https://fontawesome.com/
[image]: https://www.clipartmax.com/middle/m2i8b1m2K9Z5m2K9_ant-clipart-childrens-ant-cute/
[demo]: https://cotes2020.github.io/chirpy-demo/
[wiki]: https://github.com/cotes2020/jekyll-theme-chirpy/wiki
[contribute-guide]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/.github/CONTRIBUTING.md
[contributors]: https://github.com/cotes2020/jekyll-theme-chirpy/graphs/contributors
[lib]: https://github.com/cotes2020/chirpy-static-assets
[jetbrains]: https://www.jetbrains.com/?from=jekyll-theme-chirpy
[donation]: https://sponsor.cotes.page/
[mit]: https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/LICENSE
