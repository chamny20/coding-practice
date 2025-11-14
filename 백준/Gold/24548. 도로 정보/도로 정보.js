const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.shift().split('');
const prefix = Array(n).fill(0);

const obj = { 'T': 0, 'G': 0, 'F': 0, 'P': 0};
const map = new Map();
map.set('T0-G0-F0-P0', 1);

let ans = 0;

for (let i=0; i<n; i++) {
    const key = arr[i];
    obj[key]++;
    
    const tCnt = obj['T'];
    const gCnt = obj['G'];
    const fCnt = obj['F'];
    const pCnt = obj['P'];

    prefix[i] = `T${tCnt%3}-G${gCnt%3}-F${fCnt%3}-P${pCnt%3}`;
    
    const cnt = map.get(prefix[i]) || 0;
    ans += cnt;
    map.set(prefix[i], cnt + 1);
    
    
}

console.log(ans)
