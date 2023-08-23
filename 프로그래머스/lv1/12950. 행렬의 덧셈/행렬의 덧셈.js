function solution(arr1, arr2) {
  var answer = [];

  for(let i=0; i<arr1.length; i++) { //arr1의 길이만큼 반복
    let sum = [];
    for(let j=0; j<arr1[i].length; j++){ //arr1 안의 배열의 길이 2번
      sum.push(arr1[i][j] + arr2[i][j]);
			//j=0일 때 : sum = [4,6]
			//j=1일 때 : sum = [7,9]
    }
    answer.push(sum); //[4,6], [7,9]가 push됨
  }
  
  return answer;
}