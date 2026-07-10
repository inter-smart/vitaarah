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

fileReplacements.forEach(({ file, queryName, importName }) => {
  const filePath = path.join(srcDir, ...file.split('/'));
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the syntax error: const getAboutPageQuery() = buildQuery(...)
  const syntaxErrRegex = new RegExp(`const\\s+${importName}\\(\\)\\s*=\\s*buildQuery\\([\\s\\S]*?\\}\\);\\s*`, 'g');
  content = content.replace(syntaxErrRegex, '');

  fs.writeFileSync(filePath, content);
});

console.log('Fix complete.');
