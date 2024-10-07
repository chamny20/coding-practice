const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

const F = {};
arr.forEach((el) => {
    if (!(el in F)) 
        F[el] = 0;
    F[el]++;
})

let stack = [];
let ans = new Array(n).fill(-1);

for (let i=0; i<n; i++) {
    while(stack.length && F[arr[i]] > F[arr[stack[stack.length-1]]]) {
        ans[stack.pop()] = arr[i];
    }
    stack.push(i);
}

console.log(ans.join(" "));
