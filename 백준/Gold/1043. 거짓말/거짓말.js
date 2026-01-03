const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input.shift().split(' ').map(Number);
// n: 사람 수
// m: 파티 수

// 진실된 사람들 번호
const numArr = input.shift().split(' ').map(Number);
const truthPeople = new Set(numArr.slice(1));

const graph = {};
for (let i=1; i<=n; i++) {
    graph[i] = [];
}

const party = [];

for (let i=0; i<m; i++) { // 각 파티
    const [num, ...arr] = input[i].split(' ').map(Number);
    party.push(arr);
    
    for (let j=0; j<num; j++) {
        for (let k=0; k<num; k++) {
            if (j !== k) {
                graph[arr[j]].push(arr[k]);
            }
        }
    }
    
}

// 겹치는 애들 
const queue = [...truthPeople];

while (queue.length) {
    const cur = queue.shift();
    
    for (const next of graph[cur]) {
        if (!truthPeople.has(next)) {
            queue.push(next);
            truthPeople.add(next);
        }
    }
}


let ans = 0;

for (let i=0; i<m; i++) {
    let canLie = true;
    
    for (const person of party[i]) {
        if (truthPeople.has(person)) {
            canLie = false;
            break;
        }
    }
    
    if (canLie) ans++;
}

console.log(ans);