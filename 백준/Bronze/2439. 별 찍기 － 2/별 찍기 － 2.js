let input = Number(require('fs').readFileSync('/dev/stdin'));
let str = '';

for (let i=1; i<=input; i++) {
    str += ' '.repeat(input-i) + '*'.repeat(i) + '\n';
}

console.log(str);