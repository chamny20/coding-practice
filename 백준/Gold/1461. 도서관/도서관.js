const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

// 음수, 양수 배열구분
const arr1 = arr.filter(n => n < 0).map(n => -n).sort((a, b) => b-a);
const arr2 = arr.filter(n => n > 0).sort((a, b) => b - a);

const max = Math.max(...arr1, ...arr2);
const isMaxInArr1 = arr1.includes(max);

let ans = 0;

// 음수
for (let i=0; i<arr1.length; i+=m) {
    if (i===0 && isMaxInArr1) { // 제일먼거리 편도
        ans += arr1[i];
    } else {
        ans += arr1[i] * 2;
    }
}

// 양수
for (let i=0; i<arr2.length; i+=m) {
    if (i===0 && !isMaxInArr1) {
        ans += arr2[i];
    } else {
        ans += arr2[i] * 2;
    }
} 

console.log(ans);