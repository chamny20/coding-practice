const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const logCnt = Number(input[0]);
let logSet = new Set();

for (let i=1; i<=logCnt; i++) {
    let [name, isTrue] = input[i].split(" ");
    if (isTrue === "enter")
        logSet.add(name);
    else if (isTrue === "leave")
        logSet.delete(name);
}
let ans = Array.from(logSet);
ans.sort().reverse();
// ans.sort((a,b) => b.localeCompare(a));
console.log(ans.join("\n"));