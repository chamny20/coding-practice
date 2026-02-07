const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const s = input[0];

const obj = {};
for (let i=97; i<=122; i++) {
    obj[i] = 0;
}

for (let i=0; i<s.length; i++) {
    const c = s[i];
    const key = c.charCodeAt();
    obj[key]++;
}

const valList = Object.values(obj);
console.log(valList.join(' '));