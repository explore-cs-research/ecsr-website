# ECSR Website

Website for the Explore CS Research (ECSR) program at the University of Michigan. Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Project structure

```
ecsr-website/
├── index.md                  # Homepage
├── pages/                    # All other site pages
│   ├── current-students.md
│   ├── prospective-students.md
│   └── contact.md
├── _layouts/
│   └── default.html          # Shared page template (header, nav, footer)
├── _data/
│   └── nav.yml               # Navigation link definitions
├── assets/
│   ├── css/style.css          # Site styling
│   └── images/                # Photos and images
├── _config.yml                # Jekyll configuration
└── Gemfile                    # Ruby dependencies
```

## Editing pages

All page content is written in [Markdown](https://www.markdownguide.org/basic-syntax/). To edit a page:

1. Open the corresponding `.md` file (homepage is `index.md`, others are in `pages/`)
2. Edit the content below the front matter (the `---` block at the top)
3. Commit and push -- GitHub Pages will rebuild automatically

Each page has **front matter** at the top that looks like this:

```yaml
---
layout: default
title: Page Title
permalink: /url-path/
---
```

- `title` controls the browser tab title
- `permalink` controls the page URL (only needed for pages in `pages/`)
- Don't change `layout: default` unless you've created a new layout

### Adding a new page

1. Create a new `.md` file in `pages/`
2. Add front matter with `layout`, `title`, and `permalink`
3. Add an entry to `_data/nav.yml` if it should appear in the navigation

### Editing the navigation

The nav links are defined in `_data/nav.yml`:

```yaml
- title: Home
  url: /
- title: Current Students
  url: /current-students/
```

Add, remove, or reorder entries here.

### Adding images

Place images in `assets/images/` and reference them in markdown:

```markdown
![Alt text]({{ '/assets/images/filename.jpg' | relative_url }})
```

Or in HTML blocks within markdown:

```html
<img src="{{ '/assets/images/filename.jpg' | relative_url }}" alt="Alt text">
```

## Local development

Prerequisites: [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Bundler](https://bundler.io/).

```bash
bundle install        # Install dependencies (first time only)
bundle exec jekyll serve --livereload   # Start local server
```

The site will be available at `http://localhost:4000/`.

## Deploying

The site deploys automatically via GitHub Pages when you push to `main`.

To set up GitHub Pages for the first time:

1. Go to the repo **Settings > Pages**
2. Under "Source", select **Deploy from a branch**
3. Set the branch to `main` and folder to `/ (root)`
4. Save

The site will then be live at [https://explore-cs-research.github.io/](https://explore-cs-research.github.io/).


## Search engine indexing

The site is currently configured to **not be indexed** by search engines. Two mechanisms are in place:

1. **`robots.txt`** at the repo root — tells crawlers not to index any pages
2. **`<meta name="robots" content="noindex, nofollow">`** in `_layouts/default.html` — a per-page directive that search engines respect even if they skip `robots.txt`

When you're ready to make the site public, remove both:

1. Delete `robots.txt`
2. Remove the `<meta name="robots" content="noindex, nofollow">` line from `_layouts/default.html`
