function solution(arr) {
    var answer = [];
    
    arr.forEach((num) => {
        for (let i=0; i<num; i++) {
            answer.push(num);
        }
    })
    
    return answer;
}