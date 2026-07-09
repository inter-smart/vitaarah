const fs = require('fs');
const path = require('path');

const files = [
  'd:/react/vitaarah/frontend/src/components/blocks/about/about-approach.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/about/about-clinic.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/about/about-credibility.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/blog/blog-card.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/blog/blog-detail.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/blog/blog-listing.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/contact/contact-info.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/gallery/gallery-listing.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/home/home-about.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/home/home-blogs.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/home/home-members.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/home/home-programs.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/home/home-testimonials.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/packages/packages-listing.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/program/program-detail.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/speciality/speciality-details.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/speciality/speciality-pathway.jsx',
  'd:/react/vitaarah/frontend/src/components/blocks/treatment/treatment-alchemy.jsx',
  'd:/react/vitaarah/frontend/src/components/common/InnerHero.jsx',
  'd:/react/vitaarah/frontend/src/components/layout/footer.jsx',
  'd:/react/vitaarah/frontend/src/components/layout/header.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace empty alt strings
  content = content.replace(/<Image([^>]*)alt=""/g, '<Image$1alt="Image"');
  content = content.replace(/<Image([^>]*)alt=\{""\}/g, '<Image$1alt="Image"');
  
  // Regex to find alt={...} inside <Image ... />
  // We look for alt={...}, if it doesn't contain || " or ?? " or similar, we append || "Image"
  content = content.replace(/<Image[\s\S]*?>/g, (match) => {
    return match.replace(/alt=\{([\s\S]*?)\}/, (altMatch, altContent) => {
      // Check if it already has a string fallback
      if (altContent.includes('|| "') || altContent.includes('?? "') || altContent.includes("|| '") || altContent.includes("?? '") || altContent.includes('\`') || altContent.trim().endsWith('"Image"')) {
        return altMatch;
      }
      
      // Don't modify if it looks like a complex function call or ternary that already returns strings
      if (altContent.includes('?')) {
        // Just wrap it and add fallback
        return `alt={(${altContent.trim()}) || "Image"}`;
      }
      
      return `alt={${altContent.trim()} || "Image"}`;
    });
  });

  fs.writeFileSync(file, content, 'utf8');
});

console.log("Fixed files!");
