function solution(x, n) {
  var answer = [];    
  for(let i=1; i<=n; i++) { //n번 반복
    answer.push(x*i); //x의 배수가 차례대로 배열에 들어가도록 push 함수 사용
  }
  return answer; //answer 리턴
}

console.log(solution(2, 5));