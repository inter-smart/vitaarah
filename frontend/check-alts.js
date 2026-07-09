const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('d:/react/vitaarah/frontend/src/components');
let badFiles = new Set();
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/<Image[\s\S]*?alt=\{([\s\S]*?)\}[\s\S]*?>/g) || [];
  matches.forEach(m => {
    const altMatch = m.match(/alt=\{([\s\S]*?)\}/);
    if (altMatch) {
      const altContent = altMatch[1];
      if (!altContent.includes('|| "') && !altContent.includes('?? "') && !altContent.includes('|| \'') && !altContent.includes('?? \'') && !altContent.includes('\`')) {
        badFiles.add(file);
      }
    }
  });
  const stringMatches = content.match(/<Image[\s\S]*?alt="([^"]*)"[\s\S]*?>/g) || [];
  stringMatches.forEach(m => {
    const altText = m.match(/alt="([^"]*)"/)?.[1];
    if (!altText || altText.trim() === '') {
      badFiles.add(file);
    }
  });
});
console.log(Array.from(badFiles).join('\n'));
