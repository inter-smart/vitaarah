const { spawn } = require('child_process');

const child = spawn('node', ['node_modules/@strapi/strapi/bin/strapi.js', 'import', '-f', 'export-data.tar.gz', '--force'], {
  env: {
    ...process.env,
    DATABASE_URL: 'postgresql://postgres.zvjsbtsumnfhjtbmiiek:6VOAgoGmszwxsS7q@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres',
    DATABASE_CLIENT: 'postgres',
  },
  cwd: 'd:\\react\\vitaarah\\backend',
  stdio: ['pipe', 'pipe', 'pipe']
});

child.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(`STDOUT: ${output}`);
  if (output.includes('Are you sure you want to proceed?')) {
    console.log('--- Responding with Yes ---');
    child.stdin.write('y\n');
  }
});

child.stderr.on('data', (data) => {
  console.error(`STDERR: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
