 const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split("");
let values = {};
let strArr = arr.filter((el) => el !== '*' && el !== '/' && el !== '+' && el !== '-');
let idx = 65;
// { A: 1, B: 2, ...} 형태로 만들기
for (let i=2; i<input.length; i++) {
    // values[strArr[i-2]] = Number(input[i]);
    values[String.fromCharCode(idx)] = Number(input[i]);
    idx++;
}

let stack = [];
for (let i=0; i<arr.length; i++) {
    let str = arr[i];
    let a, b;
    
    switch (str) {
        case '+':
            a = stack.pop();
            b = stack.pop();
            stack.push(b+a);
            break;
        case '-':
            a = stack.pop();
            b = stack.pop();
            stack.push(b-a);
            break;
        case '*':
            a = stack.pop();
            b = stack.pop();
            stack.push(b*a);
            break;
        case '/':
            a = stack.pop();
            b = stack.pop();
            stack.push(b/a);
            break;
        default:
            stack.push(values[str]);
            break;
    }
}

console.log(stack[0].toFixed(2));




