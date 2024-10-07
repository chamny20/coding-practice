const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let stack = [];
let cnt = 0;
let isTrue = false; // 레이저인지 아닌지 판단
// stack에 '('를 담는다  =>  ')' 값이 들어올 경우 레이저 or 쇠막대의 끝인지 판단한다. 
// => 레이저인 경우 쇠막대 개수만큼 더하고, 쇠막대의 경우는 끝 조각 1만 더한다.

for (let i=0; i<input.length; i++) {
  
    if (input[i] === '(') {
        stack.push('(');
        isTrue = true;
    } else {
        if (isTrue) {
            stack.pop();
            cnt += stack.length;
            isTrue = false;
        } else {
            stack.pop();
            cnt++;
        }
    }
    
}

console.log(cnt);