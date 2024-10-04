const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let ans = [];
let deque = [];

for (let i=0; i<Number(n); i++) {
    let [cmd, num] = arr[i].split(" ");
    
    switch (cmd) {
        case 'push_front':
            deque.unshift(Number(num));
            break;
        case 'push_back':
            deque.push(Number(num));
            break;
        case 'pop_front':
            if (deque.length > 0) {
                ans.push(deque.shift());
            } else {
                ans.push(-1);
            }
            break;
        case 'pop_back':
            if (deque.length > 0) {
                ans.push(deque.pop());
            } else {
                ans.push(-1);
            }
            break;
        case 'size':
            ans.push(deque.length);
            break;
        case 'empty':
            if (deque.length > 0) 
                ans.push(0);
            else
                ans.push(1);
            break;
        case 'front':
            if (deque.length > 0) 
                ans.push(deque[0]);
            else
                ans.push(-1);
            break;
        case 'back':
            if (deque.length > 0) 
                ans.push(deque[deque.length - 1]);
            else
                ans.push(-1);
            break;
    }
}

console.log(ans.join("\n"));