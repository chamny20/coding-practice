const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let stack = [];
let current = 1;
let ans = [];

for (let i=0; i<n; i++) { // 0~7까지 반복
    let target = arr[i];
    
    while (current <= target) {
        stack.push(current);
        ans.push('+');
        current++;
        
    }
    
    if(target === stack[stack.length - 1]) {
        stack.pop();
        ans.push('-');
        // current--;
    } else {
        console.log("NO");
        return;
    }
}

console.log(ans.join("\n"));