<div align="center">

  # Chirpy Jekyll Theme

  A minimal, responsive and feature-rich Jekyll theme for technical writing.

  [![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy?color=brightgreen)](https://rubygems.org/gems/jekyll-theme-chirpy)
  [![CI](https://github.com/cotes2020/jekyll-theme-chirpy/actions/workflows/ci.yml/badge.svg)](https://github.com/cotes2020/jekyll-theme-chirpy/actions/workflows/ci.yml)
  [![Codacy Badge](https://app.codacy.com/project/badge/Grade/4e556876a3c54d5e8f2d2857c4f43894)](https://www.codacy.com/gh/cotes2020/jekyll-theme-chirpy/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cotes2020/jekyll-theme-chirpy&amp;utm_campaign=Badge_Grade)
  [![GitHub license](https://img.shields.io/github/license/cotes2020/jekyll-theme-chirpy.svg)](https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/LICENSE)
  [![996.icu](https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg)](https://996.icu)

  [**Live Demo →**][demo]

  [![Devices Mockup](https://chirpy-img.netlify.app/commons/devices-mockup.png)][demo]

</div>

## Features

<details>
  <summary>
    <i>Click to view features</i>
  </summary>
  <p>

  - Dark / Light Theme Mode
  - Localized UI language
  - Pinned Posts
  - Hierarchical Categories
  - Trending Tags
  - Table of Contents
  - Last Modified Date of Posts
  - Syntax Highlighting
  - Mathematical Expressions
  - Mermaid Diagram & Flowchart
  - Dark / Light Mode Images
  - Embed Videos
  - Disqus / Utterances / Giscus Comments
  - Search
  - Atom Feeds
  - Google Analytics
  - Page Views Reporting
  - SEO & Performance Optimization

  </p>
</details>

## Documentation

To explore usage, development, and upgrade guide of the project, please refer to
the [Wiki][wiki].

## Contributing

Welcome to report bugs, help improve the code or submit new features.
For more information, please see the ["Contributing Guidelines"][contribute-guide].

## Credits

This theme is mainly built with [Jekyll][jekyllrb] ecosystem,
[Bootstrap][bootstrap], [Font Awesome][icons] and some other [wonderful tools][lib].
The avatar and favicon design come from [Clipart Max][image].

Thanks to all the [contributors][contributors]. Also, folks who submitted issues
or unmerged PRs should not be forgotten. Because they reported bugs, shared ideas,
or inspired me to write more readable documentation.

Last but not least, thanks to [JetBrains][jetbrains] for providing the
_Open Source Development_ license.

## Sponsoring

If you'd like to sponsor this project, the following options are available.

[![Ko-fi](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ff5f5f?logo=ko-fi&logoColor=white)](https://ko-fi.com/coteschung)
[![Wechat Pay](https://img.shields.io/badge/-Tip%20Me%20on%20WeChat-brightgreen?logo=wechat&logoColor=white)][donation]
[![Alipay](https://img.shields.io/badge/-Tip%20Me%20on%20Alipay-blue?logo=alipay&logoColor=white)][donation]

## License

This work is published under [MIT][mit] License.

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


### Update Page Shennanigans
This theme originally displayed the posts collection, along with pagination, on the homepage. We wanted to move displaying this collection, along with pagination, to another tab. To get this to work with Jekyll's built in pagination, a lot of things had to be changed.

- Changing some settings in config.yml:
```yaml
paginate: 10
paginate_path: "/lab_updates/page:num/"
paginate_root: "/lab_updates" # this is not used by the paginate plugin but custom defined for use in this project
```
- Creating a dummy "Updates" tab that actually links to "/lab_updates"
- Creating a simple [lab_updates/index.html](lab_updates/index.html) page so Jekyll recognizes it as a valid place to inject pagination information.


In addition to these changes, hardcoded parts of the theme templates that make checks to do something if the `page.layout == 'home'` also had to be modified. Not all of these were changed, and depending on how the site is updated, more of these hardcoded values might need changing. Of special note is the [_includes/js-selector.html](_includes/js-selector.html) file, which decides to load certain pieces of important initialization code depending on which page the user is on.
