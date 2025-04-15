const input = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');
const [n, w, l] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

let time = 0;
const bridge = Array(w).fill(0);
let bridgeSum = 0;

while (arr.length > 0 || bridgeSum > 0) {
    bridgeSum -= bridge.shift();
    
    if (bridgeSum + arr[0] <= l) {
        const item = arr.shift();
        bridge.push(item);
        bridgeSum += item;
    } else {
        bridge.push(0);
    }
    time++;
}

console.log(time);