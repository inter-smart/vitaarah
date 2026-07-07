<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:strapi-integration-rules -->
# Strapi API Integration Rules

Before performing any Strapi CMS integration task on this project, read and apply all rules defined in:

`.agents/skills/strapi-api-integration-rules/SKILL.md`

Key rules:
- **Never remove existing rendered UI fields** during API integration (ui-1)
- **Report missing schema fields** instead of silently deleting UI (ui-2)
- **Always diff the original vs updated component** before finishing (ui-3)
- Never use `populate: "*"` — always explicit populate (populate-1)
- Use exact Strapi snake_case field names from schema files (field-1)
- Wrap all media URLs with `getStrapiMediaUrl()` (media-1)
- No inline mappers in page server components (code-1)
<!-- END:strapi-integration-rules -->
