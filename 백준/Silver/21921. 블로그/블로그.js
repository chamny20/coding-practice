const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, x] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

/** 슬라이딩 윈도우 로직
* 1) 처음 x일의 합 먼저 구하기
* 2) 맨 앞요소 빼고, 새 요소 더하면서 합 유지
* 3) 최댓값과 그 횟수 계산
*/
let sum = 0;
for (let i=0; i<x; i++) {
    sum += arr[i];
}

let max = sum;
let cnt = 1; // 횟수 카운팅

for (let i=x; i<n; i++) { 
    sum = sum - arr[i-x] + arr[i]; // 슬라이딩 윈도우 (이전꺼 하나 제거, 새거 하나 추가)
    
    if (sum > max) {
        max = sum;
        cnt = 1;
    } else if (sum === max) {
        cnt++;
    }
}

if (max === 0) {
    console.log('SAD');
} else {
    console.log(max);
    console.log(cnt);
}