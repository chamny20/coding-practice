const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const p = Number(input.shift());
const result = [];

for (let i=1; i<=p; i++) {
    const [step, ...arr] = input.shift().split(' ').map(Number);
    const list = [];
    let cnt = 0;
    
    for (let j=0; j<arr.length; j++) {
        const cur = arr[j];
        if (list.length === 0) {
            list.push(cur);
            continue;
        }
        cnt += list.filter(n => n > cur).length;
        list.push(cur);
    }
    
    
    result.push([step, cnt].join(' '));
}

console.log(result.join('\n'));