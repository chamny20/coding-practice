const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 듣도 못한 사람 목록 (n명)
const nArr = input.slice(1, n + 1);
// 보도 못한 사람 목록 (m명)
const mArr = input.slice(n + 1);

// 두 목록을 Set으로 변환
const nSet = new Set(nArr);
const mSet = new Set(mArr);

// 교집합 구하기 (nSet에 있는 값 중 mSet에도 있는 값)
let ans = [...nSet].filter(person => mSet.has(person));

// 사전 순으로 정렬
ans.sort();

// 정답 출력
console.log(ans.length);
ans.forEach(x => console.log(x));
