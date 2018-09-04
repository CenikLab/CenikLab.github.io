- We should make the publication images prettier. They should be resized to similar dimensions.
- Template from https://github.com/daattali/beautiful-jekyll
- Need to update Publications: Three links:
1- Selected Publications. This can have link to journal website, summary image, pdf

- Team: Should allow for a simple format.
Top image could be a lab photo. Followed by for each individual:
Photo; List of Education BA; PhD; Postdoc. Link to CV.
If possible, we can do something like: http://greenleaf.stanford.edu/people.html

- Need to update Home page. Posts can be recent publication summaries/news.

#### How do I move the blog to another page instead of having it on the home page?

The default style of Beautiful Jekyll is to feature the blog feed on the front page. But for many sites that's not the ideal structure, and you may want to have a separate dedicated page for the blog posts. To have the blog hosted on a different URL (for example at `<mysite.com>/blog`), copy the `index.html` file into a folder with the same name as the desired page (for example, to `blog/index.html`), and in the `_config.yml` file you need to add a parameter `paginate_path: "/<page name>/page:num/"` (for example `paginate_path: "/blog/page:num/"`).

# Local Run
~~~~
docker build -t beautiful-jekyll CenikLab.github.io

docker run -d -p 4000:4000 --name beautiful-jekyll -v CenikLab.github.io:/srv/jekyll beautiful-jekyll
~~~~
