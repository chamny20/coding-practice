let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

for (let i=0; i<input.length-1; i++) {
    let sum = 0;
    let arr = [];
    for (let j=1; j<input[i]; j++) {
        if (input[i] % j === 0) {
            sum += j;
            arr.push(j);
        }
    }
    if (sum === input[i]) {
        // 6 = 1 + 2 + 3
        console.log(`${input[i]} = ${arr.join(' + ')}`);
    } else 
        console.log(`${input[i]} is NOT perfect.`);
}
