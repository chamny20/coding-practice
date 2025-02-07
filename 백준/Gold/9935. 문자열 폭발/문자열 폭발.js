const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let str = input.shift();
const target = input[0];
const stack = [];
const targetLen = target.length;

for (let i=0; i<str.length; i++) {
    stack.push(str[i]);
    
    if (stack.length >= targetLen) {
        if (stack.slice(-targetLen).join('') === target)
            stack.splice(-targetLen);
    }
}

if (stack.length > 0) 
    console.log(stack.join(''));
else
    console.log('FRULA');