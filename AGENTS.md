# CV Generator Project

This is a Next.js 16 personal curriculum vitae (CV)/resume generator application built with TypeScript, React, and Tailwind CSS. The project generates professional-looking CVs in both web and print formats.

## Architecture

- **Framework**: Next.js 16.2.6 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4.3.0 (PostCSS-based)
- **UI Components**: Custom React components in `src/app/components/`
- **Data**: TypeScript interfaces define CV structure

## Project Structure

```
cv-generator/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── components/   # Reusable UI components (Experience, SkillCategories, etc.)
│   │   ├── helper/       # Utility functions
│   │   ├── icons/        # SVG icon components (Tech stack logos)
│   │   ├── interfaces/   # TypeScript type definitions
│   │   ├── svgs/         # Additional SVG graphics
│   │   ├── layout.tsx    # Root layout with metadata and SEO
│   │   └── page.tsx      # Main CV rendering page
│   ├── components/       # Component library (mirrors src/app/components/)
│   └── data/
│       └── userData.ts   # Author's CV data (configured for personal use)
├── out/                  # Production build output (Next.js export)
└── deploy.ps1            # PowerShell deployment script
```

## Conventions

### Code Style
- Use TypeScript strict mode (`"strict": true` in tsconfig.json)
- All components are React Server or Client Components as appropriate
- Follow existing import patterns: `import X from "./path"` (no need for `@/` alias resolution)
- Component files use PascalCase, hooks use camelCase

### Data Model
The CV is driven by a `UserData` interface with these key sections:
- **Basic info**: firstName, lastName, title, description, image
- **Contact**: email, phone, street, city, zip code
- **Social**: linkedIn, youtube, facebook, instagram, twitter, xing, github, phone, email
- **Languages**: array of `{language, level?}` objects
- **Skills**: array of skill names from predefined list
- **Experience**: work history with company, title, dates, description, technologies
- **Testimonials**: client references

### Component Patterns
- Presentational components in `src/app/components/`
- Icons as separate TSX files in `src/app/icons/` or `src/svgs/`
- Use Tailwind utility classes for styling (no external CSS files)
- Responsive design: default to mobile-first with `sm:` breakpoints
- Print-friendly styles use `print:` prefix (e.g., `print:bg-white`)

### Build & Deployment
```bash
# Development server
npm run dev    # or bun dev

# Production build
npm run build  # generates static export in ./out/
```

### Important Notes

- **Language**: The CV is configured for German (`de_DE`) locale by default
- **Data file**: `src/data/userData.ts` contains the actual CV content (NOT source-controlled secrets)
- **Metadata**: SEO metadata is defined in `src/app/layout.tsx` with automatic generation
- **JSON-LD**: Schema.org structured data is automatically included for search engines
- **Responsive behavior**: Use Tailwind's mobile-first approach (`sm:`, `md:`, etc.)
- **Print mode**: Design includes CSS breakpoints via `@media print` in globals.css

### Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript 6.x with strict mode |
| Styling | Tailwind CSS v4 with PostCSS |
| Icons | Lucide React + custom SVGs |
| UI Library | None (custom components only) |

### Common Tasks

**To add a new skill category:**
1. Add the skill to `src/app/interfaces/userData.ts` Skill type if needed
2. Update `skillCategories` array in `src/data/userData.ts`
3. The `SkillCategories` component renders this automatically

**To modify CV sections:**
- Main rendering logic is in `src/app/page.tsx`
- Individual components are in `src/app/components/`
- Use Tailwind classes for styling, print styles in `src/app/globals.css`

### Environment Variables

The project uses environment variables for deployment:
- `VERCEL_URL` - for generated CV URLs
- Deployment script (`deploy.ps1`) requires `-HostName` and `-User` parameters
