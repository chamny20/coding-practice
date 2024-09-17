const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let namesMap = new Map();
let ans = [];

// 포켓몬 이름을 키로, 번호를 값으로 저장
for (let i = 1; i <= n; i++) {
    namesMap.set(input[i], i);
}

for (let k = n + 1; k < input.length; k++) {
    const query = input[k];

    // query가 숫자인 경우 (포켓몬 번호로 이름 찾기)
    if (!isNaN(Number(query))) {
        // 숫자는 배열에서 바로 해당 번호의 포켓몬 이름을 가져옴
        ans.push(input[Number(query)]);
    } 
    // query가 문자열인 경우 (포켓몬 이름으로 번호 찾기)
    else {
        ans.push(namesMap.get(query));
    }
}

console.log(ans.join("\n"));
