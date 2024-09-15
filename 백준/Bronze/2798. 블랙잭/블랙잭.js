let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let nums = input[1].split(' ').map(Number);

nums.sort((a,b) => a-b);
let sumArr = [];

for (let i=0; i<n-2; i++) {
    for (let j=i+1; j<n-1; j++) {
        for (let k=j+1; k<n; k++) {
            sumArr.push(nums[i]+nums[j]+nums[k]);
        }
    }
}

sumArr = sumArr.filter((a) => a <= m);
console.log(Math.max(...sumArr));