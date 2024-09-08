const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

if (str.split('').reverse().join('') === str) console.log(1);
else console.log(0);