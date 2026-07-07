# Vitaarah — Ayurvedic Wellness Website

A full-stack website for **Vitaarah**, an Ayurvedic wellness clinic. Built with a **Next.js 16** frontend and a **Strapi 5** headless CMS backend, with **Supabase** for booking/appointment data.

---

## Project Structure

```
vitaarah/
├── frontend/          # Next.js 16 app (React 19)
└── backend/           # Strapi 5 CMS
```

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.7 | React framework (App Router) |
| React | 19.2.4 | UI library |
| Tailwind CSS | v4 | Styling |
| Framer Motion | 12 | Animations & scroll reveals |
| Swiper | 12 | Carousels & sliders |
| Supabase JS | 2 | Booking / appointment database |
| TanStack Query | 5 | Client-side data fetching |
| TanStack Form | 1 | Form state management |
| Zod | 4 | Form/API schema validation |
| Radix UI | — | Accessible UI primitives (Dialog, Select) |
| Embla Carousel | 8 | Alternative carousel |
| `qs` | 6 | Strapi populate query string builder |
| `@strapi/blocks-react-renderer` | 1 | Renders Strapi rich-text blocks |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Strapi | 5.47.1 | Headless CMS & REST API |
| SQLite / PostgreSQL | — | Database (SQLite local, Postgres prod) |
| Node.js | ≥20 | Runtime |

### Hosting / Services
| Service | Role |
|---|---|
| Vercel | Frontend deployment |
| Render | Strapi backend deployment |
| Supabase | Appointment / booking database |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About the clinic |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/condition` | Conditions treated |
| `/contact` | Contact page |
| `/gallery` | Image gallery |
| `/packages` | Treatment packages |
| `/speciality` | Specialities / Doshas |
| `/treatment` | Treatments listing |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms & conditions |

---

## Strapi CMS Content Types

### Single Types (Pages)
- `home-page` — Home page sections
- `about-page` — About page sections
- `blog-page` — Blog listing page
- `contact-page` — Contact page
- `condition-page` — Conditions page
- `gallery-page` — Gallery page
- `package-page` — Packages page
- `specialities-page` — Specialities page
- `treatment-page` — Treatments page
- `privacy-page` / `terms-page` — Legal pages
- `header` / `footer` — Global layout
- `site-setting` — Site-wide settings

### Collection Types
- `blog` — Blog posts
- `member` — Doctors / team members
- `package` — Treatment packages
- `treatment` — Individual treatments
- `condition` — Medical conditions
- `root-cause` — Root cause entries (used in About Intelligence section)
- `testimonial` — Patient testimonials
- `gallery-image` — Gallery images
- `program` — Programs
- `available-duration` — Booking time slots
- `treatment-category` — Treatment categories
- `treatment-video` — Treatment videos

---

## Frontend Data Flow

```
Next.js Page (Server Component)
    │
    ├─ buildQuery(populateObject)   ← lib/strapi.js
    │      │
    │      └─ qs.stringify({ populate: ... })  → query string
    │
    ├─ fetchAPI(`/api/<endpoint>?${query}`)
    │      │
    │      └─ fetch → Strapi REST API (with Bearer token)
    │
    └─ Pass data to React components
```

### Key Utility: `buildQuery`

Located at [`frontend/src/lib/strapi.js`](./frontend/src/lib/strapi.js).

Converts a nested JS object into a Strapi-compatible `populate` query string using `qs.stringify`:

```js
buildQuery({
  hero: {
    populate: {
      heroMedia: true,
      primaryButton: { populate: { icon: true } },
    },
  },
})
// → populate[hero][populate][heroMedia]=true&populate[hero][populate][primaryButton][populate][icon]=true
```

> **Important:** Relations nested inside components require explicit deep populate. `populate: "*"` only goes one level deep and will **not** populate relations or nested components automatically.

---

## Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_SITE_URL=https://vitaarah.vercel.app
NEXT_PUBLIC_STRAPI_URL=https://vitaarah.onrender.com

# Optional: Strapi API Token (for protected content)
STRAPI_API_TOKEN=your_token_here

# Supabase (for booking system)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

### Backend (`backend/.env`)
Standard Strapi environment variables:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
DATABASE_CLIENT=sqlite      # or postgres for production
DATABASE_URL=...            # PostgreSQL connection string (production)
```

---

## Local Development

### 1. Start the Strapi Backend

```bash
cd backend
npm install
npm run dev
# Strapi admin: http://localhost:1337/admin
# API:          http://localhost:1337/api
```

### 2. Start the Next.js Frontend

```bash
cd frontend
npm install
npm run dev
# App: http://localhost:3000
```

> **Switch to local Strapi:** In `frontend/.env.local`, uncomment:
> ```
> NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
> ```

---

## Strapi Populate Cheat Sheet

Common pattern used across all pages:

```js
// Simple field populate
{ populate: { image: true } }

// Nested relation with media
{ populate: { items: { populate: { icon: true, featuredImage: true } } } }

// Deep nested (component → relation → media + sub-component)
{
  populate: {
    services_section: {
      populate: {
        root_causes: {
          populate: {
            icon: true,
            service_specification: true,
          },
        },
      },
    },
  },
}
```

---

## Known Field Name Conventions

Strapi returns **snake_case** field names. All frontend component props must use snake_case:

| Schema Field | Component Prop |
|---|---|
| `sub_title` | `item.sub_title` |
| `short_description` | `item.short_description` |
| `service_specification` | `item.service_specification` |
| `featured_image` | `item.featured_image` |
| `about_section` | `data.about_section` |

---

## Deployment

| Service | Branch / Trigger |
|---|---|
| **Vercel** (frontend) | Push to `main` — auto deploys |
| **Render** (backend) | Push to `main` — auto deploys |

Media uploads are stored locally on Render by default. For production, configure Strapi cloud storage (Cloudinary / S3) in `backend/config/plugins.ts`.
