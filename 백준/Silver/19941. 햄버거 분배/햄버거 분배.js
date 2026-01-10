const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = input.shift().split(' ').map(Number);
const arr = input.shift().split('');

const visited = Array(n).fill(false);
let cnt = 0;

for (let i=0; i<n; i++) {
    if (arr[i] === 'P') {
        const startIdx = i - k;
        const lastIdx = i + k;
        for (let j=startIdx; j<=lastIdx; j++) {
            if (arr[j] === 'H' && !visited[j]) {
                visited[j] = true;
                cnt++;
                break;
            }
        }
    }
}

console.log(cnt);