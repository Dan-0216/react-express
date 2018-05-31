var args = [];
if (process.argv.length <= 2) {
    args.push("start");
}
else {
    args.push(process.argv[2]);
}

const opts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm run', args, opts);
