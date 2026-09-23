# Teejay_Tech — Developer Portfolio

A React + Tailwind CSS + Framer Motion portfolio for Ahmad Muhammad Tijjani.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. Build for production with `npm run build`;
preview that build with `npm run preview`.

## What to edit first

1. **Your photo** — drop a real headshot at `public/profile.jpg`
   (the hero shows a fallback initials avatar until you do).
2. **Your CV** — add `public/Ahmad-Muhammad-Tijjani-CV.pdf`
   (the "Download CV" button already points to this path).
3. **Project screenshots** — add PNGs under `public/projects/`
   matching the filenames in `src/data/projects.js`.
4. **Social links** — `src/data/socialLinks.js`. Your GitHub link is
   filled in; the rest are `#` placeholders.
5. **Email & contact form** — `src/components/Contact.jsx` has a
   fully validated form (required fields, email format, loading/
   success/error states) but no email backend wired up yet. The
   file has comments showing where to connect Formspree, EmailJS,
   Resend, or your own API route. Until you do, submitting shows an
   honest "not connected yet" error rather than a fake success
   message.
6. **Project data** — `src/data/projects.js`, `src/data/services.js`,
   `src/data/technologies.js` are all plain data files, so you can
   add or edit entries without touching component code.

## Structure

```
src/
  components/       Navbar, Hero, About, Services, TechStack,
                     Projects, Process, Contact, Footer, ThemeToggle
  components/ui/     Button, ProjectCard, SocialLinks
  context/           ThemeContext (dark/light mode, persisted)
  data/              projects, services, technologies, socialLinks
public/
  profile.jpg                          (add your photo)
  Ahmad-Muhammad-Tijjani-CV.pdf         (add your CV)
  projects/*.png                        (add screenshots)
```

## Notes

- Dark/light mode respects your system preference on first visit,
  then persists your choice in `localStorage`.
- Motion respects `prefers-reduced-motion`.
- No fake experience, testimonials, stats, or URLs were invented —
  placeholders are marked clearly wherever real information
  (email, social links, repo/demo URLs, CV, screenshots) is still
  needed. .
