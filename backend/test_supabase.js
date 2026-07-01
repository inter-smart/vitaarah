const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres.zvjsbtsumnfhjtbmiiek:6VOAgoGmszwxsS7q@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres'
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to Supabase PostgreSQL successfully!');
    const res = await client.query('SELECT NOW()');
    console.log('Current time:', res.rows[0].now);
    await client.end();
  } catch (err) {
    console.error('Connection error', err.stack);
  }
}

run();
