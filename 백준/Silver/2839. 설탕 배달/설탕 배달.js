let num = Number(require('fs').readFileSync('/dev/stdin').toString());
let ans = 0;

for (let i=0; i<=num; i++) {
    for (let j=0; j<=num; j++) {
        if ((5*i + 3*j) === num) {
            ans = i+j;
            break;
        }
    }
}

if (ans)
    console.log(ans);
else
    console.log(-1);