const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);
const robots = Array(n).fill(false);

let step = 0;

while (true) {
    step++;
    // 한칸 회전
    arr.unshift(arr.pop());
    robots.unshift(robots.pop());
    robots[n-1] = false;

    // 로봇 
    for (let i=n-2; i>=0; i--) {
        if (robots[i] && !robots[i+1] && arr[i+1] > 0) {
            robots[i+1] = true;
            arr[i+1]--;
            robots[i] = false;
        }
    }
    robots[n-1] = false;

    // 로봇 올리기
    if (!robots[0] && arr[0] > 0) {
        robots[0] = true;
        arr[0]--;
    }
    
    // 내구도 0 계산카운팅
    const cnt = arr.filter(item => item === 0).length;
    if (cnt >= k) break;
}

console.log(step);