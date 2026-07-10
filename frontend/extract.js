const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');
const outFile = path.join(__dirname, 'extracted_queries.txt');
let outContent = '';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync(srcDir, function(filePath) {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const queryRegex = /const\s+(\w+Query)\s*=\s*buildQuery\([\s\S]*?\}\);/g;
        let match;
        let hasMatch = false;
        while ((match = queryRegex.exec(content)) !== null) {
            if (!hasMatch) {
                outContent += `\n\n=== ${filePath} ===\n`;
                hasMatch = true;
            }
            outContent += match[0] + '\n\n';
        }
    }
});

fs.writeFileSync(outFile, outContent);
console.log('Done!');
