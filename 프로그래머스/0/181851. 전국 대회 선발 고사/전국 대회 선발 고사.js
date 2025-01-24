function solution(rank, attendance) {
    var answer = [];
    let result = [];
    
    rank.forEach((student, idx) => {
        if (attendance[idx]) {
            result.push(student);
        }
    })
    
    result = result.sort((a, b) => a - b).slice(0, 3);
    console.log(result)
    
    for (let i=0; i<result.length; i++) {
        answer.push(rank.indexOf(result[i]));
    }
    
    
    return answer[0] * 10000 + 100 * answer[1] + answer[2];
}