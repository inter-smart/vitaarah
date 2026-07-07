---
name: strapi-api-integration-rules
description: Rules for integrating Strapi CMS data into the Vitaarah Next.js frontend. Use this skill whenever performing API integration, replacing local/mock data with live Strapi data, or updating any component that renders CMS-driven content.
license: MIT
metadata:
  author: vitaarah-team
  version: "1.0.0"
  date: July 2026
  abstract: Strict rules for Strapi 5 API integration in the Vitaarah Next.js 16 project. Covers populate query construction, field naming, media handling, component prop contracts, and UI preservation during integration work.
---

# Strapi API Integration Rules — Vitaarah

Strict guidelines for integrating Strapi 5 CMS data into the Next.js 16 frontend. Apply these rules for every page or component integration task.

## When to Apply

Reference these rules when:
- Replacing local/mock data with live Strapi API data
- Writing or updating `buildQuery()` populate objects
- Updating page server components to fetch from Strapi
- Updating components to consume Strapi response fields
- Reviewing any existing Strapi integration for correctness

---

## Rule Categories

| Priority | Category | Rule Prefix |
|---|---|---|
| 1 | UI Preservation | `ui-` |
| 2 | Populate Queries | `populate-` |
| 3 | Field Naming | `field-` |
| 4 | Media Handling | `media-` |
| 5 | Error Handling | `error-` |
| 6 | Code Standards | `code-` |

---

## ui-1 — Never Remove Existing Rendered Fields

**CRITICAL.**

Do not remove, omit, or replace any field that is currently rendered by a component during API integration.

Every field currently displayed in the UI must continue to be displayed after integration. If a field exists in the component's JSX, it must be preserved — whether it is being populated from Strapi or left as-is.

**Before finalizing any integration:**
- Compare the original component JSX with the updated component JSX line by line
- Verify that every rendered field, section, conditional block, and UI element is still present
- If anything is missing, restore it before committing

```jsx
// WRONG — silently drops the conditionLabel UI element
{item?.conditions?.map(...)}

// CORRECT — preserve every rendered field even if schema mapping is uncertain
{item?.conditionLabel && (
  <div className="...">{item.conditionLabel}</div>
)}
{item?.conditions?.map(...)}
```

---

## ui-2 — Report Missing Schema Fields, Do Not Delete UI

If a field is rendered by the existing component but **cannot be found** in the Strapi schema:

- **Stop.**
- **Do not silently remove the UI element.**
- **Report the discrepancy** before proceeding.

State clearly:
- The field name used in the component
- That it was not found in the schema
- Ask whether to add it to the schema, source it from a different field, or hardcode it

```
STOP: Component renders `item.conditionLabel` but this field
does not exist in the `specialities-item` or `treatment` schema.
Options:
  1. Add `condition_label` field to the Strapi schema
  2. Use a different existing field as the label
  3. Hardcode the label string in the component
Please confirm before proceeding.
```

---

## ui-3 — Final UI Diff Verification

Before completing any integration task, perform a final diff:

1. List every field/value rendered in the **original component**
2. List every field/value rendered in the **updated component**
3. Confirm they match — or explicitly list any intentional removals with justification

No field may be silently dropped.

---

## populate-1 — No Wildcard Populate

Never use `populate: "*"` unless the field has no nested relations or media and a comment explains why.

Always use explicit populate, mirroring the About page pattern:

```js
// WRONG
root_causes: { populate: "*" }

// CORRECT
root_causes: {
  populate: {
    icon: true,
    service_specification: true,
  },
}
```

---

## populate-2 — Relations Inside Components Need Explicit Populate

Strapi does NOT automatically populate relations nested inside components, even with `populate: "*"`.

Every media field and relation at every depth must be explicitly listed.

**Depth map to follow:**
```
page field (component)
  └─ sub-component or relation
       └─ media or nested relation
            └─ explicit populate required here
```

---

## populate-3 — Only Populate Fields Used by the Frontend

Only populate fields that are actually rendered by a component. Do not populate entire content types speculatively.

Check the component JSX to determine the exact set of fields needed, then write the populate object to match exactly.

---

## field-1 — Use Exact Strapi Schema Field Names

All field names must exactly match the schema JSON files in `backend/src/api/` and `backend/src/components/`.

Strapi returns **snake_case**. Do not guess or invent field names.

```js
// WRONG — guessing
item.shortDescription
item.subTitle
item.specs

// CORRECT — verified against schema
item.short_description
item.sub_title
item.service_specification
```

If unsure of a field name, read the schema file before writing code.

---

## field-2 — Preserve Schema Typos

If the Strapi schema contains a typo, preserve it exactly in the frontend code and add a comment.

```js
// botton_label — typo preserved from Strapi schema (cta-specialities-section.json)
cta_specialities_section.botton_label
```

Do not correct typos in field names without also updating the Strapi schema.

---

## media-1 — Always Use getStrapiMediaUrl()

Every Strapi media URL must be wrapped with `getStrapiMediaUrl()` from `@/lib/strapi`.

```jsx
// WRONG
<Image src={item.icon.url} />

// CORRECT
<Image src={getStrapiMediaUrl(item.icon.url)} />
```

This handles both local (relative `/uploads/...`) and remote (absolute `https://...`) URLs correctly.

---

## media-2 — Always Provide Fallback Alt Text

Every `<Image>` using Strapi media must have a fallback `alt` attribute.

Use the field's `alternativeText`, then a meaningful contextual fallback:

```jsx
alt={item.icon.alternativeText || item.title || "Speciality icon"}
alt={data.hero_media.alternativeText || data.title || "Page hero image"}
```

Never use an empty `alt=""` for content images.

---

## error-1 — Null-Safe Field Access

Use optional chaining (`?.`) on all Strapi response fields. Never assume a field is present.

```jsx
// WRONG — crashes if conditions_treated is null
{item.treatment.conditions_treated.map(...)}

// CORRECT
{item?.treatment?.conditions_treated?.map(...)}

// CORRECT with length guard
{item?.treatment?.conditions_treated?.length > 0 && (
  item.treatment.conditions_treated.map(...)
)}
```

---

## error-2 — Null-Safe Page Data

In every page server component, guard against a null API response before destructuring:

```js
const res = await fetchAPI(`/api/page-name?${query}`);
const data = res?.data ?? null;

if (!data) return null;
```

---

## code-1 — No Mappers in Page Components

Do not transform Strapi response data in the page server component using inline mapper functions.

If the component shape does not match the Strapi response shape, update the component to consume the Strapi fields directly.

The page server component should only: fetch, destructure, and pass props.

```js
// WRONG — mapper in page component
const pathwayData = {
  title: specialities_listing_section.title,
  specialities: specialities_listing_section.specialities_item.map(item => ({
    title: item.treatment?.title,
    ...
  })),
};

// CORRECT — pass raw Strapi data; component handles field access
<SpecialityPathway data={{ specialities_listing_section, cta_specialities_section }} />
```

---

## code-2 — No "use client" Unless Required

Remove `"use client"` from any component that:
- Has no React hooks
- Has no browser API calls
- Has no event handlers requiring client-side rendering

Only keep it where it is genuinely required (e.g. components using `useState`, `useEffect`, `useRef`, carousel hooks, etc.).

---

## code-3 — Follow Home/About Page Patterns

Every new integration must match the conventions already established in:
- `src/app/page.js` (Home page)
- `src/app/about/page.js` (About page)

Including: import order, `buildQuery` usage, `fetchAPI` usage, destructuring pattern, JSX structure, and conditional rendering style.
