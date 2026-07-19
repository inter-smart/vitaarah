/**
 * generate-missing-formats.js
 * 
 * Generates missing thumbnail/small/medium/large image format variants
 * for all Strapi upload records that have a `formats` JSON in the DB
 * but whose resized files are absent from public/uploads/.
 * 
 * Uses the same Sharp library Strapi uses internally.
 * Run from: backend/
 *   node generate-missing-formats.js
 */

require('dotenv').config({ path: '.env' });
const sharp  = require('sharp');
const path   = require('path');
const fs     = require('fs');
const { Client } = require('pg');

const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');

// Strapi default breakpoints (px width)
const BREAKPOINTS = {
  thumbnail: 245,
  small:     500,
  medium:    750,
  large:    1000,
};

const client = new Client({
  host:     process.env.DATABASE_HOST     || '127.0.0.1',
  port:     parseInt(process.env.DATABASE_PORT) || 5432,
  user:     process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME     || 'vitaarah_local',
  ssl:      false,
});

async function run() {
  await client.connect();
  console.log('✅ Connected to PostgreSQL\n');

  // Fetch all files that have formats JSON
  const { rows } = await client.query(`
    SELECT id, hash, ext, mime, formats, width, height
    FROM files
    WHERE formats IS NOT NULL AND mime LIKE 'image/%' AND mime != 'image/svg+xml'
    ORDER BY id
  `);

  console.log(`Found ${rows.length} image records with format variants in DB\n`);

  let generated = 0;
  let skipped   = 0;
  let failed    = 0;
  let noSource  = 0;

  for (const row of rows) {
    const origFilename = `${row.hash}${row.ext}`;
    const origPath     = path.join(UPLOADS_DIR, origFilename);

    if (!fs.existsSync(origPath)) {
      console.log(`⚠️  ORIGINAL MISSING — skipping formats for: ${origFilename}`);
      noSource++;
      continue;
    }

    const formats = row.formats;

    for (const [sizeName, breakpointW] of Object.entries(BREAKPOINTS)) {
      const fmtData = formats[sizeName];
      if (!fmtData) continue; // DB says this size was never generated (image too small)

      const destFilename = `${sizeName}_${row.hash}${row.ext}`;
      const destPath     = path.join(UPLOADS_DIR, destFilename);

      if (fs.existsSync(destPath)) {
        skipped++;
        continue; // already present
      }

      try {
        const img     = sharp(origPath);
        const meta    = await img.metadata();
        const srcW    = meta.width  || breakpointW;
        const srcH    = meta.height || breakpointW;

        // Only resize if image is wider than the breakpoint
        if (srcW <= breakpointW) {
          // Image is already smaller than this breakpoint — Strapi wouldn't have generated it
          // but the DB says it exists, so just copy the original
          fs.copyFileSync(origPath, destPath);
        } else {
          await img
            .resize({ width: breakpointW, withoutEnlargement: true })
            .toFile(destPath);
        }

        console.log(`  ✅ Generated: ${destFilename}`);
        generated++;
      } catch (err) {
        console.error(`  ❌ FAILED: ${destFilename} — ${err.message}`);
        failed++;
      }
    }
  }

  await client.end();

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(' FORMAT GENERATION COMPLETE');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(` Generated   : ${generated}`);
  console.log(` Already OK  : ${skipped}`);
  console.log(` No source   : ${noSource}`);
  console.log(` Failures    : ${failed}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\nNext step: restart Strapi — all format 404s should be resolved.');
}

run().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
