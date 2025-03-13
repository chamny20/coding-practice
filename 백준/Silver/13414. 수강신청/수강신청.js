const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [k, l] = input.shift().split(' ').map(Number);
const stdMaps = new Map();
const arr = input.map(String);

for (const num of arr) {
    if (stdMaps.has(num)) {
        stdMaps.delete(num);
    }
    stdMaps.set(num);
}

const ans = [];

stdMaps.forEach((_, key) => {
    if (ans.length < k)
        ans.push(key);
});

console.log(ans.join("\n"));