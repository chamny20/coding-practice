const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let arr = [];
let ans = [];
for (let i=1; i<=n; i++) {
    let cmd = input[i].split(" ")[0];
    let num = Number(input[i].split(" ")[1]);
    
    switch (cmd) {
        case 'push':
            arr.push(num);
            break;
        case 'front':
            if (arr.length > 0)
                ans.push(arr[0]);
            else
                ans.push(-1);
            break;
        case 'back':
            if (arr.length > 0)
                ans.push(arr[arr.length - 1]);
            else
                ans.push(-1);
            break;
        case 'empty':
            if (arr.length > 0)
                ans.push(0);
            else
                ans.push(1);
            break;
        case 'pop':
            if (arr.length > 0) {
                ans.push(arr.shift());
            }
            else
                ans.push(-1);
            break;
        case 'size':
            ans.push(arr.length);
            break;
    }
}

console.log(ans.join("\n"));