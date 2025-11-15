const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
let ans = 0;

for (let i=0; i<n; i++) {    
    // 예외케이스 > 3묶음보다 2묶음 선택 (ex. 1 3 2) -> (0 2 2)
    if (i+2<n && arr[i+1] > arr[i+2]) {
        const cnt = Math.min(arr[i], arr[i+1] - arr[i+2]);
        arr[i] -= cnt;
        arr[i+1] -= cnt;
        ans += cnt * 5;
    }
    
    // 3묶음 가능할 때
    if (i+2 < n) {
        const cnt = Math.min(arr[i], arr[i + 1], arr[i + 2]);
        arr[i] -= cnt;
        arr[i+1] -= cnt;
        arr[i + 2] -= cnt;
        ans += cnt * 7;
    }
    
    // 2묶음
    if (i+1 < n) {
        const cnt = Math.min(arr[i], arr[i+1]);
        arr[i] -= cnt;
        arr[i+1] -= cnt;
        ans += 5 * cnt;
    }
    
    // 단품
    ans += arr[i] * 3;
    arr[i] = 0;
    
}

console.log(ans);