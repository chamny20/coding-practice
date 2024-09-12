let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i=0; i<input.length; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    if (a === 0 && b === 0) break;
    if (a > b) {
        if (a % b === 0)
            console.log("multiple");
        else
            console.log("neither");
    } else {
        if (b % a === 0)
            console.log("factor");
        else
            console.log("neither");
    }
}