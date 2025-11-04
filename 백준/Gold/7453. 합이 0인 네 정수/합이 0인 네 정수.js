const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(inputs.shift());
const A = [];
const B = [];
const C = [];
const D = [];

for (let i=0; i<n; i++) {
    const [a, b, c, d] = inputs[i].split(' ').map(Number);
    A.push(a);
    B.push(b);
    C.push(c);
    D.push(d);
}

// A+B -> map으로 관리
const map = new Map();

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        const sum = A[i] + B[j];
        map.set(sum, (map.get(sum) || 0) + 1);
    }
}

let ans = 0;

for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        const target = -(C[i] + D[j]);
        if (map.has(target))
            ans += map.get(target);
    }
}

console.log(ans);