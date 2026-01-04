const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [h, w, x, y] = input.shift().split(' ').map(Number);
const row = h + x;
const col = w + y;
const B = [];
const A = Array.from(Array(h), () => Array(w).fill(0));

for (let i=0; i<row; i++) {
    const line = input[i].split(' ').map(Number);
    B.push(line);
}

// B[i][j]이 0이면 모두 X
// B[i][j] = A[i][j] + A[i-x][j-y] 둘다 포함
// B[i][j] = A[i][j] or A[i-x][j-y] 하나만 포함

for (let i=0; i<h; i++) {
    for (let j=0; j<w; j++) {
        if (!B[i][j]) continue;
        
        if (i >= x && j >= y) {
            A[i][j] = B[i][j] - A[i-x][j-y];
        } else {
            A[i][j] = B[i][j];
        }
    }
}

console.log(A.map(line => line.join(' ')).join('\n'));