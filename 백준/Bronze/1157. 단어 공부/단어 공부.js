let input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();

let strCount = {};

for (let char of input) {
    if (strCount[char]) {
        strCount[char]++;
    } else {
        strCount[char] = 1;
    }
}

let strCountArr = Object.entries(strCount);
strCountArr.sort((a, b) => b[1] - a[1]);

// 빈도수가 같은 문자가 있는지 확인
if (strCountArr.length > 1 && strCountArr[0][1] === strCountArr[1][1]) {
    console.log("?");
} else {
    console.log(strCountArr[0][0]);
}
