const fs = require('fs');
const path = require('path');

const fileReplacements = [
  {
    file: 'about/page.js',
    queryName: 'aboutPageQuery',
    importName: 'getAboutPageQuery'
  },
  {
    file: 'blogs/page.js',
    queryName: 'blogPageQuery',
    importName: 'getBlogPageQuery'
  },
  {
    file: 'blogs/[slug]/page.js',
    queryName: 'blogPageQuery',
    importName: 'getBlogDetailQuery'
  },
  {
    file: 'blogs/[slug]/page.js',
    queryName: 'activeBlogQuery',
    importName: 'getActiveBlogQuery'
  },
  {
    file: 'conditions/[slug]/page.js',
    queryName: 'conditionPageQuery',
    importName: 'getConditionPageQuery'
  },
  {
    file: 'conditions/[slug]/page.js',
    queryName: 'conditionQuery',
    importName: 'getConditionQuery'
  },
  {
    file: 'contact/page.js',
    queryName: 'contactPageQuery',
    importName: 'getContactPageQuery'
  },
  {
    file: 'gallery/page.js',
    queryName: 'galleryPageQuery',
    importName: 'getGalleryPageQuery'
  },
  {
    file: 'packages/page.js',
    queryName: 'packagePageQuery',
    importName: 'getPackagePageQuery'
  },
  {
    file: 'packages/page.js',
    queryName: 'packagesQuery',
    importName: 'getPackageQuery'
  },
  {
    file: 'page.js',
    queryName: 'homePageQuery',
    importName: 'getHomePageQuery'
  },
  {
    file: 'privacy-policy/page.js',
    queryName: 'privacyPageQuery',
    importName: 'getPrivacyPageQuery'
  },
  {
    file: 'programs/[slug]/page.js',
    queryName: 'programQuery',
    importName: 'getProgramQuery'
  },
  {
    file: 'speciality/page.js',
    queryName: 'specialitiesPageQuery',
    importName: 'getSpecialitiesPageQuery'
  },
  {
    file: 'speciality/[slug]/page.js',
    queryName: 'specialityQuery',
    importName: 'getSpecialityDetailQuery'
  },
  {
    file: 'terms-and-conditions/page.js',
    queryName: 'termsPageQuery',
    importName: 'getTermsPageQuery'
  },
  {
    file: 'treatment/page.js',
    queryName: 'pageQuery',
    importName: 'getTreatmentPageQuery'
  },
  {
    file: 'treatment/page.js',
    queryName: 'categoriesQuery',
    importName: 'getTreatmentCategoriesQuery'
  },
  {
    file: 'treatment/[slug]/page.js',
    queryName: 'treatmentQuery',
    importName: 'getTreatmentDetailQuery'
  }
];

const srcDir = path.join(__dirname, 'src', 'app');

let processedFiles = new Set();

fileReplacements.forEach(({ file, queryName, importName }) => {
  const filePath = path.join(srcDir, ...file.split('/'));
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not exists
  if (!content.includes(importName)) {
    if (content.includes('@/lib/queries')) {
      content = content.replace(/import\s+\{([^}]+)\}\s+from\s+["']@\/lib\/queries["'];/, (match, p1) => {
        return `import { ${p1.trim()}, ${importName} } from "@/lib/queries";`;
      });
    } else {
      content = `import { ${importName} } from "@/lib/queries";\n` + content;
    }
  }

  // Remove the buildQuery import if no longer needed
  // We'll just leave it or let ESLint fix it later.

  // Replace usage of the old const with the function call
  // e.g. /api/packages?${packagesQuery} -> /api/packages?${getPackageQuery()}
  const queryUsageRegex = new RegExp(`\\$\\{${queryName}\\}`, 'g');
  content = content.replace(queryUsageRegex, `\$\{${importName}()\}`);

  const queryUsageRegex2 = new RegExp(`\\b${queryName}\\b`, 'g');
  content = content.replace(queryUsageRegex2, `${importName}()`);

  // Remove the old const declaration
  const queryRegex = new RegExp(`const\\s+${queryName}\\s*=\\s*buildQuery\\([\\s\\S]*?\\}\\);\\s*`, 'g');
  content = content.replace(queryRegex, '');

  fs.writeFileSync(filePath, content);
  processedFiles.add(filePath);
});

console.log('Refactoring complete for ' + processedFiles.size + ' files.');
