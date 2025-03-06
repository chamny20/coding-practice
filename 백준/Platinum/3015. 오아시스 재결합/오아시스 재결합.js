const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input.shift());
const stack = [];
let cnt = 0;
const arr = input.map(Number);

for (let i=0; i<arr.length; i++) {
    const num = arr[i];
    let same = 1;
    while (stack.length > 0 && stack.at(-1)[0] <= num) {
        const [topHeight, topCnt] = stack.pop();
        cnt += topCnt;
        
        if (topHeight === num) 
            same = topCnt + 1;
    }
    
    if (stack.length > 0) cnt++;
    stack.push([num, same]);
}

console.log(cnt);