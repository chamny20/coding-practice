// 프로그래머스 level1 숫자 짝꿍

// 1) 시간초과 에러 발생
function solution1(X, Y) {
  let len = 0;
  let arrX = X.split("");
  let arrY = Y.split("");
  let list = [];
  let cnt = 0;

  if (X.length > Y.length) len = X.length;
  else len = Y.length;

  for (let i = 0; i < len; i++) {
    if (arrX.includes(arrY[i])) {
      list.push(arrY[i]);
    } else {
      cnt++;
    }
  }
  if (cnt == len) list = [-1];
  list.sort((a, b) => b - a);
  if (list[0] == 0) list = [0];
  answer = list.join("");

  return answer;
}

// 2) 수정
function solution2(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  // 내림차순으로 정렬해 반환하면 최댓값
  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// filter 함수와 repeat 함수를 적절히 사용해야 함을 인지
