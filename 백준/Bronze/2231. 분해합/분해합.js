let n = Number(require('fs').readFileSync('/dev/stdin').toString());
let ans = 0;

for (let i=1; i<n; i++) {
    let num = i;
    let sum = num;
    while (num > 0) {
        sum += parseInt(num % 10);
        num = Math.floor(num/10);
    }
    if(sum === n) {
        ans = i;
        break;
    }
}

console.log(ans);