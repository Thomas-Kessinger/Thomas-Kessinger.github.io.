# Thomas Kessinger — personal site

My professional website for RESECON 490AI (Fall 2026): Home, About, Projects,
Résumé and Contact. Plain HTML, CSS and a little JavaScript. No install, no
build step.

## Open it on my laptop
Double-click `index.html` in Finder, or drag it into a browser window.

## Files
| File | What it is |
|---|---|
| `index.html` | Home: what the site is, the statement panel, links to every page |
| `about.html` | About: background, photo, and the holdings table with the skills filter |
| `projects.html` | Projects: the industry-study card (summary, (a)–(e), report/slides/charts links) |
| `resume.html` | Résumé: says "coming soon" until `resume.pdf` exists |
| `contact.html` | Contact: email, LinkedIn, GitHub |
| `styles.css` | All styling. Colors and font sizes are at the top (`:root`) |
| `app.js` | The phone menu and the skills filter on About. Pages still work without it |
| `NOTES.md` | Design decisions and a dated changelog |

## Still to fill in
Search every file for `[PLACEHOLDER]`. Right now:
- Photo (About): add `photo.jpg`, then swap the placeholder block (instructions in the comment above it).
- Résumé PDF: add `resume.pdf`, then swap the "coming soon" block (comment in `resume.html`).
- LinkedIn and GitHub links (Contact).
- Dates for four holdings, and the Theta Chi row (About).
- The 150–250 word project summary, and the report, slides and charts links (Projects).

## Publish to GitHub Pages (later)
`index.html` is at the top of this folder and every link is relative, so this
folder can be published as is. Steps are in the anti-slop-web skill, sections 11.3 and 11.4.
Before publishing: search for `[PLACEHOLDER]` and make sure none are left.

## Demo vs. real
Nothing here is invented data. Facts about me come from my CLAUDE.md and
`project/industry_interview.md`. The "what it built" lines and the skill tags on
About were drafted by Claude from those facts, so I need to check them.
