const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, c] = input.shift().split(' ').map(Number);
const m = Number(input.shift());
const arr = [];

for (let i=0; i<m; i++) {
    const info = input[i].split(' ').map(Number);
    arr.push(info);
}

// arr은 택배 정보
arr.sort((a, b) => a[1] - b[1]); // 도착지 가까운 것부터 정렬

// 각 구간별 남은 용량 초기화
const capacity = Array(n + 1).fill(c);
let result = 0;

for (const [from, to, cnt] of arr) {
    let minFree = Infinity;
    
    // 구간 중 최소 남은 용량 찾기
    for (let i=from; i<to; i++) {
        minFree = Math.min(minFree, capacity[i]);
    }
    
    // 싣는 박스 개수
    const load = Math.min(minFree, cnt);
    
    // 차감
    for (let i=from; i<to; i++) {
        capacity[i] -= load;
    }
    
    result += load;
}

console.log(result);