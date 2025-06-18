const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let obj = {};

let line = 0;
for (let i=0; i<n; i++) {
    const [url, pwd] = input[line++].split(' ');
    obj[url] = pwd;
}

const result = [];

for (let i=0; i<m; i++) {
    const targetUrl = input[line++];
    result.push(obj[targetUrl]);
}

console.log(result.join('\n'));