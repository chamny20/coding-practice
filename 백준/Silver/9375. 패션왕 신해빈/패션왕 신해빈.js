const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
const ans = [];

for (let i=0; i<t; i++) {
    const n = Number(input.shift());
    const obj = {};
    
    for (let j=0; j<n; j++) {
        const [name, type] = input.shift().split(' ');
        obj[type] = obj[type] || [];
        obj[type].push(name);
    }
    
    let total = 1;
    for (const key in obj) {
        total *= (obj[key].length + 1); // (A+1)(B+1)(C+1) = ABC+AB+AC+BC+A+B+C+1
    }
    ans.push(total - 1);
}

console.log(ans.join('\n'));