const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let leftStack = input[0].split(""); // [a, b, c, d]
let rightStack = [];
let m = Number(input[1]);

for (let i=2; i<2+m; i++) {
    let cmd = input[i].split(" ")[0];
    let str = cmd === 'P' ? input[i].split(" ")[1] : '';
    
    switch (cmd) {
        case 'L':
            if (leftStack.length > 0)
                rightStack.push(leftStack.pop());
            break;
        case 'D':
            if (rightStack.length > 0)
                leftStack.push(rightStack.pop());
            break;
        case 'B':
            if (leftStack.length > 0) {
                leftStack.pop();
            }
            break;
        case 'P':
            leftStack.push(str);
            break;
    }
}

console.log(leftStack.concat(rightStack.reverse()).join(""));