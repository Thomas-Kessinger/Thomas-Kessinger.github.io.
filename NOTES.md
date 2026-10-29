# NOTES — design decisions and changelog

## Design decisions (2026-10-29)
- **Idea:** the site reads like a wealth-management client statement. Home has a
  "Statement for Thomas Kessinger" panel; About shows experience as "Holdings".
- **The one live thing:** the skills strip on About. Choosing a skill lights up the
  holdings that built it. No percentages or invented numbers.
- **Palette:** ground #F3F4F1, surface #FFFFFF, ink #15201B, muted #56625C,
  accent #881C1C (UMass maroon; I believe this is the official hex, not verified),
  signal #1F6B4A (ledger green).
- **Type:** Bricolage Grotesque (headings), IBM Plex Sans (body, tabular figures).
  Five sizes.
- **Shape:** square corners everywhere (a printed statement). Only the skill
  toggles are round.
- **Motion:** subtle. The Home statement panel "prints" in once on load; none if
  the visitor has reduced motion turned on.
- **Light mode:** recruiters read it at a desk in daylight.
- **Folder:** built in `site/` as asked. CLAUDE.md reserves `website/` for public
  site files; decide which one to keep.
- **Privacy:** email only, plus LinkedIn/GitHub links. No phone, address, student
  ID, GPA or transcript. Hometown left out.

## Changelog
- 2026-10-29: First version. Five pages, statement design, skills filter,
  [PLACEHOLDER] items for photo, résumé PDF, LinkedIn, GitHub, dates, project
  summary and links.
- 2026-10-29: Checked at 390/768/1440 px. Fixes: smaller photo placeholder on
  phones, smaller holdings text on phones, Home directory now says résumé PDF is
  "coming soon".
- 2026-10-29: Round 2, "make every page aesthetic". Home hero on ledger paper
  (ruled lines + red margin line), bigger headline. Inner pages get a dark
  letterhead band with a maroon ribbon. Full dark footer with wordmark and links.
  Résumé gets an "At a glance" statement panel next to the PDF notice. Contact
  gets a tear-off "slip" with a large email (removed the duplicate email row).
