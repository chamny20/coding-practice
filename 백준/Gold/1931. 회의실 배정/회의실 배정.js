const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input.shift());
const arr = [];

for (let i=0; i<N; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    arr.push([start, end]);
}

// 끝나는 시간 오름차순 -> 같으면 시작시간 비교
arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
});


let lastT = 0;
let cnt = 0;

for (let i=0; i<arr.length; i++) {
    const [sTime, eTime] = arr[i];
    if (lastT <= sTime) {
        lastT = eTime;
        cnt++;
    }
}

console.log(cnt);