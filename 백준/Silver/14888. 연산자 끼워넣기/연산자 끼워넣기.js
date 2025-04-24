const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(Number);
const operator = input.shift().split(' ').map(Number);

let max = -Infinity;
let min = Infinity;

const divide = (num1, num2) => {
    if (num1 < 0)
        return -Math.floor(-num1 / num2);
    return Math.floor(num1 / num2);
}


const dfs = (dep, value) => {
    if (dep === n) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        return;
    }
    
    for (let i=0; i<4; i++) {
        if (operator[i] > 0) {
            operator[i]--;
            
            if (i === 0) dfs(dep+1, value + arr[dep]);
            else if (i === 1) dfs(dep+1, value - arr[dep]);
            else if (i === 2) dfs(dep+1, value * arr[dep]);
            else 
                dfs(dep+1, divide(value, arr[dep]));
            
            // back
            operator[i]++;
        }
    }
}


dfs(1, arr[0]);
console.log(max ? max : 0);
console.log(min ? min : 0);

