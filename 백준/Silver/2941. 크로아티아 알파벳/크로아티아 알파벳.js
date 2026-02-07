const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const list = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let str = input[0];

// 일단 크로아티아 몇갠지 계산필요
// 남은 알파벳 카운트해서 더하면 됨

for (let i=0; i<list.length; i++) {
    const target = list[i];
    str = str.replaceAll(target, '.');
}

console.log(str.length);