let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim()); // num을 숫자로 받기

let count = 1;
let num = 666;

while (count < n) {
    num++;
    if (String(num).includes('666'))
        count++;
}

console.log(num);