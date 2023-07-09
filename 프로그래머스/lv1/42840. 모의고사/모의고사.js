function solution(answers) {
    var answer = [];
    
    let p1 = [1,2,3,4,5];
    let p2 = [2,1,2,3,2,4,2,5];
    let p3 = [3,3,1,1,2,2,4,4,5,5];
    
    //filter를 사용하여 answers를 탐색하면서 수포자들의 번호와 비교(완전탐색)
    let s1 = answers.filter((a, i) => a === p1[i%p1.length]).length;
    let s2 = answers.filter((a, i) => a === p2[i%p2.length]).length;
    let s3 = answers.filter((a, i) => a === p3[i%p3.length]).length;
    
    let max = Math.max(s1, s2, s3);
    console.log(max);
    if(s1 === max)
        answer.push(1);
    if(s2 === max)
        answer.push(2);
    if(s3 === max)
        answer.push(3);
    
    return answer;
    
}