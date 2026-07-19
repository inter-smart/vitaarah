/**
 * Temporary connection test script.
 * Run: node test_pg_connection.js
 * Deletes itself after a successful run.
 */
require('dotenv').config({ path: '.env' });
const { Client } = require('pg');

const config = {
  host:     process.env.DATABASE_HOST     || '127.0.0.1',
  port:     parseInt(process.env.DATABASE_PORT) || 5432,
  user:     process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD,
  database: 'postgres', // connect to default db first
  ssl:      false,
};

console.log('\n🔍 Attempting PostgreSQL connection...');
console.log(`   Host:     ${config.host}:${config.port}`);
console.log(`   User:     ${config.user}`);
console.log(`   Password: ${config.password ? '[set]' : '[MISSING - update DATABASE_PASSWORD in .env]'}`);
console.log(`   Target DB: ${process.env.DATABASE_NAME || 'vitaarah_local'}\n`);

const client = new Client(config);

client.connect()
  .then(async () => {
    console.log('✅ Connected to PostgreSQL successfully!\n');

    // Print version
    const ver = await client.query('SELECT version()');
    console.log('   Version:', ver.rows[0].version.split(',')[0]);

    // Print current user
    const cu = await client.query('SELECT current_user');
    console.log('   Current user:', cu.rows[0].current_user);

    // Check if vitaarah_local exists
    const targetDb = process.env.DATABASE_NAME || 'vitaarah_local';
    const res = await client.query(
      "SELECT datname FROM pg_database WHERE datname = $1",
      [targetDb]
    );

    if (res.rows.length > 0) {
      console.log(`\n✅ Database "${targetDb}" already exists — no action needed.`);
    } else {
      console.log(`\n⚠️  Database "${targetDb}" does NOT exist. Creating...`);
      await client.query(`CREATE DATABASE "${targetDb}"`);
      console.log(`✅ Database "${targetDb}" created successfully!`);
    }

    await client.end();
    console.log('\n🎉 All checks passed! You can now run: npm run develop\n');
  })
  .catch(err => {
    console.error('❌ Connection FAILED:', err.message);
    console.error('\n👉 Fix: Update DATABASE_PASSWORD in backend/.env with your postgres password,');
    console.error('   then run this script again: node test_pg_connection.js\n');
    process.exit(1);
  });
