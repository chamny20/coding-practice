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

let maxKey = strCountArr[0][0];
if (strCountArr.length > 1 && strCountArr[0][1] === strCountArr[1][1]) {
    console.log("?");
} else {
    console.log(maxKey);
}

