# ECSR Website

Website for the Explore CS Research (ECSR) program at the University of Michigan. Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## Project structure

```
ecsr-website/
├── index.md                  # Homepage — highlights only
├── pages/                    # All other site pages
│   ├── prospective-students.md
│   ├── current-students.md
│   ├── mentors.md
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

### What goes on which page

| Page | Purpose |
| --- | --- |
| **Home** | Highlights only — photo gallery, impact numbers, student achievements, quotes from students and mentors, news. No program mechanics. |
| **Prospective Students** | Why participate and how to participate: program rationale, what you'll do, who should apply, student quotes, application timeline. |
| **Current Students** | Resources for enrolled students — key dates, poster guides, seminars, advisor-meeting tips. |
| **Mentors** | Recruiting mentors — why mentor, mentor quotes, what's involved, how to sign up. |
| **Contact** | Program email and the organizing team. |

## Replacing placeholders

The homepage and Mentors page ship with obvious placeholders so nothing fake goes live by accident. Each one is marked in the HTML with a comment. There are four kinds:

**1. Photos** (`index.md` gallery, `mentors.md` spotlights) — replace the placeholder `<div>` with an `<img>`:

```html
<!-- before -->
<div class="ph ph--photo">Photo placeholder</div>

<!-- after -->
<img src="{{ '/assets/images/poster-session.jpg' | relative_url }}" alt="Students at the 2026 poster session">
```

Drop the image file into `assets/images/` first. Sizing and cropping are handled by CSS. For the round mentor photos, swap `<div class="ph ph--avatar">Photo</div>` the same way.

**2. Numbers** (`index.md`, "By the numbers") — replace the digits and delete the wrapper:

```html
<dd><span class="ph-value">00</span><small>since the program began</small></dd>
<!-- becomes -->
<dd>120<small>since the program began</small></dd>
```

Then delete the `<p class="ph-note">…</p>` line below the block.

**3. Quotes** (`index.md`, `mentors.md`) — replace the text, then remove `is-placeholder` from the `<blockquote class="quote is-placeholder">`. That class is what renders the dashed border and italics.

### What is still a placeholder

| Location | What's needed |
| --- | --- |
| `index.md` — gallery | 6 photos |
| `index.md` — "By the numbers" | 4 real figures (or delete the section) |
| `index.md` — mentor quotes | 2 mentor quotes (the 2 student quotes are real) |
| `mentors.md` — "What mentors say" | 3 mentor quotes |
| `mentors.md` — "Mentor spotlights" | 3 mentors, with photos |

Everything else — student highlights, alumni, news and media, student quotes — is real content.

### Adding to the real lists

**Student highlights** (`index.md`, `.achievements`) — copy an `<li>` block. The `.achievement-tag` text is any label you want ("Publication", "Project", "Award", …), and the title can wrap in an `<a>` if there's something to link to.

**Alumni** (`index.md`, `.alumni`) — copy an `<li>` with `.alumni-name` and `.alumni-role`.

**News & media** (`index.md`, `.news`) — copy an `<li>`. Keep the list newest-first; `<time datetime="2024">` accepts a year, a `YYYY-MM`, or a full date.

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

### Page headers

Every page except the homepage automatically gets a blue title banner, built from the front matter:

```yaml
---
layout: default
title: Prospective Students     # browser tab
permalink: /prospective-students/
eyebrow: Apply                  # small maize label above the title
heading: Prospective Students   # optional; defaults to `title`
subtitle: One sentence of context shown under the title.
---
```

Don't add an `# H1` to the page body — the banner already renders one.

The homepage is different: it sets `layout_style: landing`, which turns off the banner and lets the page build its own full-width sections.

### Reusable components

These CSS classes are available in any page. Copy the snippets as-is.

**Callout box** — for deadlines and announcements. Add `markdown="1"` so Markdown inside still works:

```html
<div class="notice" markdown="1">
Applications are due **September 10, 2026**.
</div>
```

Use `class="notice notice--dark"` for a solid blue version.

**Collapsible section:**

```html
<details markdown="1">
<summary>Who should apply</summary>

Content goes here.
</details>
```

**Link list** — nicer-looking list of resource links:

```html
<ul class="link-list">
  <li><a href="https://example.com">Link title</a></li>
</ul>
```

**Person card grid** — see `pages/contact.md` for a full example (`.people` + `.person-card`).

**Photo gallery** — add `gallery-item--wide` to any figure to make it span two columns:

```html
<div class="gallery">
  <figure class="gallery-item">
    <img src="{{ '/assets/images/photo.jpg' | relative_url }}" alt="Describe the photo">
    <figcaption>Caption text</figcaption>
  </figure>
</div>
```

**Quote cards** — work on both light pages and blue bands:

```html
<div class="quotes">
  <blockquote class="quote">
    <p>Quote text.</p>
    <footer>Name <span>Role or cohort</span></footer>
  </blockquote>
</div>
```

**Fact strip** (`.facts` + `.fact`) and **card grid** (`.cards` + `.card`) — see `pages/prospective-students.md`.

**Panel** — a plain white box for grouping content, used for the application timeline:

```html
<div class="panel">
  <p class="panel-label">Section label</p>
  <ul class="timeline">
    <li><strong>Date</strong><span>What happens</span></li>
  </ul>
</div>
```

**Buttons:** `<a href="..." class="btn">Label</a>`, or `btn btn--primary` for maize, `btn btn--ghost` for outlined-on-blue.

### Colors and fonts

All colors and spacing live as variables at the top of `assets/css/style.css`. The Michigan maize (`#ffcb05`) and blue (`#00274c`) are set there — change them in one place and the whole site follows.

Headings use Source Serif 4 and body text uses Inter, loaded from Google Fonts in `_layouts/default.html`. To drop the external dependency, delete the three `<link>` tags for fonts — the site falls back to Georgia and the system UI font.

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

The site will be available at `http://localhost:4000/ecsr-website/`.

## Deploying

The site deploys automatically via GitHub Pages when you push to `main`.


Until a custom domain is set up, the site will be at: [https://explore-cs-research.github.io/ecsr-website/](https://explore-cs-research.github.io/ecsr-website/).

### Adding a custom domain

When you're ready to use a custom domain (e.g. `ecsr.engin.umich.edu`):

1. Set up a CNAME record with your DNS provider pointing to `explore-cs-research.github.io`
2. In the repo **Settings > Pages**, enter your custom domain and save
3. Change `baseurl` in `_config.yml` from `"/ecsr-website"` to `""`


## Search engine indexing

The site is currently configured to **not be indexed** by search engines. Two mechanisms are in place:

1. **`robots.txt`** at the repo root — tells crawlers not to index any pages
2. **`<meta name="robots" content="noindex, nofollow">`** in `_layouts/default.html` — a per-page directive that search engines respect even if they skip `robots.txt`

When you're ready to make the site public, remove both:

1. Delete `robots.txt`
2. Remove the `<meta name="robots" content="noindex, nofollow">` line from `_layouts/default.html`
