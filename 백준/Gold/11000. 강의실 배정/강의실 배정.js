const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const status = [];

for (let i=0; i<n; i++) {
    const [s, t] = input[i].split(' ').map(Number);
    status.push({ time: s, flag: 1 });
    status.push({ time: t, flag: -1 });
}

const sorted = status.sort((a, b) => {
    if (a.time === b.time) {
        return a.flag - b.flag;
    }
    return a.time - b.time;
});

let cnt = 0;
let maxCnt = -Infinity;

for (const obj of sorted) {
    const { time, flag } = obj;
    
    if (flag === 1) cnt++;
    else if (flag === -1) cnt--;
    
    maxCnt = Math.max(maxCnt, cnt);
}



console.log(maxCnt);