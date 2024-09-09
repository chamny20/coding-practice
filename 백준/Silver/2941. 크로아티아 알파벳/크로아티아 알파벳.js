let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let alp = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i of alp) {
    input = input.replaceAll(i, '.');
}

console.log(input.length);
