const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
// n: 국가 수, k: 등수알고싶은 국가
const [n, k] = input.shift().split(' ').map(Number);

const result = [];

for (let i=0; i<n; i++) {
    const arr = input[i].split(' ').map(Number);
    result.push(arr);
}

result.sort((a, b) => {
    if (a[1] === b[1]) {
        if (a[2] === b[2]) 
            return b[3] - a[3];
        return b[2] - a[2];
    }
    return b[1] - a[1];
});

const arr = result.filter(arr => arr[0] === k)[0]; // k번 국가 금은동개수
// 등수 계산
// k번 국가보다 ‘엄격하게 더 잘한 국가 수 + 1’

let ans = 0;

for (let i=0; i<result.length; i++) {
    const [num, g, s, b] = result[i];
    
    if (g > arr[1]) {
        ans++;
    } else if (g === arr[1]) {
        if (s > arr[2]) {
            ans++;
        } else if (s === arr[2]) {
            if (b > arr[3]) ans++;
        }
    }
}

console.log(ans+1);