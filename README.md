# JP Portfolio Site 

## Tech Stack 
React, TypeScript, TailwindCSS. I'm trying to get the backend running on Proxmox. The backend use Python Flask + TinyDB. The backend is for my GitHub graph tracking, and calories tracking. I might add more features for it in the future. 

I'm aware the website doesn't fully work on some resolutions, will fix that. 

## Link 

Here is the website link: 
[JP-Portfolio](https://sudo-jp.github.io/JP-Portfolio/)

## Replacing the Banner

1. Save the final banner image as `frontend/src/assets/banner.png`.
2. Add this import to `frontend/src/components/Hero/Hero.tsx`:

   ```tsx
   import banner from '../../assets/banner.png';
   ```

3. Replace the `cover photo placeholder` paragraph in the banner container with:

   ```tsx
   <img
     src={banner}
     alt="A short description of the banner photo"
     className="h-full w-full object-cover"
   />
   ```

The existing banner container controls the responsive height. `object-cover`
fills those dimensions while preserving the image's aspect ratio.

## Editing Site Content

| Content | File |
| --- | --- |
| About text | `frontend/src/components/AboutMe/AboutMe.tsx` |
| Work rows | `frontend/src/components/Experiences/Experiences.tsx` |
| Projects | `frontend/src/components/Projects/ProjectList.ts` |
| Notes | `frontend/src/components/NotesPreview/NoteList.ts` |
| Navigation labels | `frontend/src/components/Navbar/Navbar.tsx` |
| Profile text and social links | `frontend/src/components/Hero/Hero.tsx` |

### Adding or Removing Work

Work rows come from the `experiences` array in
`frontend/src/components/Experiences/Experiences.tsx`. Add an object to create
a row or delete its object to remove it:

```ts
{
  company: 'Company name',
  role: 'Role name',
  period: 'Jan - Apr 2026',
  note: 'A short personal note about the experience.',
},
```

### Adding or Removing Projects

Every project comes from the `ProjectList` array in
`frontend/src/components/Projects/ProjectList.ts`. Add or delete an object to
change the rendered project list:

```ts
{
  title: 'Project name',
  status: 'In Progress',
  description: 'A short personal description.',
  github: 'https://github.com/username/repository',
  tech: ['TypeScript', 'React'],
  context: 'school work',
  featured: true,
},
```

Keep `featured: true` on exactly three projects. Those appear immediately;
projects without it appear in the expandable project drawer.

`context` adds small optional context beside the project title (e.g., 'school work',
'internship'). Omit it for no label.

### Editing Notes

Notes come from the `NoteList` array in
`frontend/src/components/NotesPreview/NoteList.ts`. Add or delete an object to
add or remove a topic. Every field except `title` is optional.

Use paragraphs and bullets together:

```ts
{
  title: 'Things I want to remember',
  label: 'project notes',
  paragraphs: ['A short opening thought.'],
  bullets: ['First reminder.', 'Second reminder.'],
  href: 'https://example.com/related-page',
  openByDefault: true,
},
```

Use only paragraphs:

```ts
{
  title: 'Ideas for the homelab',
  paragraphs: [
    'A short paragraph can live here without becoming a full blog post.',
    'Add another string when the thought needs a second paragraph.',
  ],
},
```

Use only bullet points:

```ts
{
  title: 'Things to try later',
  bullets: ['Try the first idea.', 'Compare it with the second idea.'],
},
```

Keep a topic title without content:

```ts
{
  title: 'Life lately',
  label: 'topic for later',
},
```

`label` adds small context above the title. `href` adds a related link.
`openByDefault` opens that note when the component first renders; keep it on
only one note.

### Wiring the Notes Component

The notes component is intentionally not mounted yet. To add it later, import
it in `frontend/src/App.tsx`:

```tsx
import NotesPreview from './components/NotesPreview/NotesPreview.tsx';
```

Render it after the projects section:

```tsx
<Projects />
<NotesPreview />
```

Optionally add a navbar link to the `navLinks` array in
`frontend/src/components/Navbar/Navbar.tsx`:

```ts
{ label: 'notes', href: '#notes' },
```

### Other Text and Links

- Edit the paragraphs in `AboutMe.tsx` to change the about section.
- Edit `navLinks` in `Navbar.tsx` to change navigation labels or destinations.
- Edit `socialLinks` and the introduction in `Hero.tsx` to update profile links
  and hero text.

## Theme Attribution

This site is themed with [Rosé Pine](https://rosepinetheme.com), a lovingly crafted color palette.

- **Icon source**: [rosepinetheme.com/assets/icon.svg](https://raw.githubusercontent.com/rose-pine/rose-pine-theme/main/assets/icon.svg)
- **License**: [MIT](https://github.com/rose-pine/rose-pine-theme/blob/main/LICENSE)
