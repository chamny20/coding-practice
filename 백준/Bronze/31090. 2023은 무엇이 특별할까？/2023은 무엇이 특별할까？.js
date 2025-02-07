const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const t = Number(input.shift());
const arr = input.map(line => Number(line));
const result = [];

for (let i=0; i<arr.length; i++) {
    const n = arr[i];
    const nextN = arr[i] + 1;
    let endNum = Number(String(n).split('').slice(-2).join(''));

    if (nextN % endNum === 0)
        result.push('Good');
    else
        result.push('Bye');
}

console.log(result.join('\n'));