const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const operator = input.shift().split(' ').map(Number);

let maxVal = -Infinity;
let minVal = Infinity;

const divide = (a, b) => {
    if (a < 0)
        return -Math.floor(-a / b);
    return Math.floor(a / b);
}

const dfs = (dep, value) => {
    if (dep === n) { // 모든 숫자를 다 사용했을 경우
        maxVal = Math.max(maxVal, value);
        minVal = Math.min(minVal, value);
        return;
    }
    
    for (let i=0; i<4; i++) {
        if (operator[i] > 0) {
            operator[i] -= 1;
            
            if (i===0) dfs(dep+1, value+arr[dep]);
            else if (i===1) dfs(dep+1, value-arr[dep]);
            else if (i===2) dfs(dep+1, value*arr[dep]);
            else if (i===3) dfs(dep+1, divide(value, arr[dep]));
            
            operator[i] += 1;
        }
    }
}

dfs(1, arr[0]);
console.log(maxVal ? maxVal : 0);
console.log(minVal ? minVal : 0);
