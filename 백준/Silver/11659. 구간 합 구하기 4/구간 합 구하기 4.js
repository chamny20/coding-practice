const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

const prefixSum = [0];

for (let i=0; i<n; i++) {
    prefixSum[i+1] = arr[i] + prefixSum[i];
}

for (let k=0; k<m; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    
    const res = prefixSum[j] - prefixSum[i-1];
    console.log(res);
}