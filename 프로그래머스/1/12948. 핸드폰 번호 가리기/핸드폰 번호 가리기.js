function solution(phone_number) {
  var answer = '';

  for(let i=0; i<phone_number.length; i++){
    if(i<phone_number.length-4) //뒤의 4자리를 제외하고 *로 만들기
      answer = answer + "*";
    else
      answer = answer + phone_number[i]; //뒤의 4자리 붙이기
  }
  return answer;
}

console.log(solution('01012345678'));