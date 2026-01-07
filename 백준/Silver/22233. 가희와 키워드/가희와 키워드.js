const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const notepad = new Set();

for (let i=0; i<n; i++) {
    const keyword = input[i];
    notepad.add(keyword);
}

const ans = [];

for (let i=0; i<m; i++) {
    const keywords = input[n+i].split(',');
    
    for (const keyword of keywords) {
        if (notepad.has(keyword)) {
            notepad.delete(keyword);
        }
    }
    const cnt = notepad.size;
    ans.push(cnt);
}

console.log(ans.join('\n'));