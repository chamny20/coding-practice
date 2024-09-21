const [n, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i=0; i<n; i++) {
    let stack = [];
    let psArr = arr[i].split('');
    let isValid = true;  // 올바른지 여부를 체크할 변수
    for (let j=0; j<psArr.length; j++) {
        if (psArr[j]== '(')
            stack.push(1);
        else if (psArr[j] == ')') {
            if (stack.length === 0) {  // 스택이 비어 있는데 ')'가 들어오면 불균형
                isValid = false;
                break;
            }
            stack.pop();
        }
    }
    
    if (stack.length === 0 && isValid)
        console.log("YES");
    else
        console.log("NO");
}


