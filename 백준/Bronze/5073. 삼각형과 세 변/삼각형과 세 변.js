let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i=0; i<input.length; i++) {
    let [a, b, c] = input[i].split(" ").map(Number);
    if (a === 0 && b === 0 && c === 0) break;  // 입력 종료 조건

    let arr = [];
    arr.push(a, b, c);
    arr.sort((a,b) => a-b);
    
    if (arr[2] >= arr[0] + arr[1]) 
        console.log("Invalid");
    else if (arr[0] === arr[1] && arr[1]===arr[2])
        console.log("Equilateral");
    else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2])
        console.log("Isosceles");
    else
        console.log("Scalene");
}

