let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = parseInt(input[0]);
let ans = '';

for (let i=1; i<=cnt; i++) {
    let [num, str] = input[i].split(" ");
    let n = Number(num); // 2
    let arr = str.split(''); // ABC
    for (let j=0; j<arr.length; j++) { // j=0, 1, 2
        for (let k=0; k<n; k++) {
            ans += arr[j];
        }
    }
    ans += '\n';
}

console.log(ans);