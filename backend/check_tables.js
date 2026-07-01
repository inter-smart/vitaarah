const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgresql://postgres.zvjsbtsumnfhjtbmiiek:6VOAgoGmszwxsS7q@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres'
});

async function run() {
  try {
    await client.connect();
    const res = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
    `);
    
    for (const row of res.rows) {
      const countRes = await client.query(`SELECT COUNT(*) FROM "${row.table_name}"`);
      if (parseInt(countRes.rows[0].count) > 0) {
        console.log(`${row.table_name}: ${countRes.rows[0].count}`);
      }
    }
    
    await client.end();
  } catch (err) {
    console.error('Error', err);
  }
}
run();
