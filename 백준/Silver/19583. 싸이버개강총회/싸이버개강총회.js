const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, E, Q] = input.shift().split(' ');

const convertTime = (str) => {
    const [h, m] = str.split(':').map(Number);
    return 60 * h + m;
}

let line = 0;
const setList = new Set();

const s = convertTime(S);
const e = convertTime(E);
const q = convertTime(Q);
let ans = 0;

for (let i=0; i<input.length; i++) {
    const [time, name] = input[i].split(' ');
    const t = convertTime(time);
    
    if (t <= s) {
        setList.add(name);
    } else if (e <= t && t <= q && setList.has(name)) {
        setList.delete(name);
        ans++;
    } 
}

console.log(ans);
