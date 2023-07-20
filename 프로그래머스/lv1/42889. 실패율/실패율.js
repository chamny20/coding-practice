function solution(N, stages) {
    var answer = [];
    
    let numPerson = stages.length;
    for (let i=1; i<=N+1; i++) {
        let numStage = stages.filter(n => n === i).length;
        console.log(numStage);
        answer.push([i, numStage/numPerson]);
        numPerson -= numStage;
    }
    answer.pop();
    answer.sort((a,b) => b[1] - a[1]);
    
    answer = answer.map(arr => arr[0]);
    console.log(answer);
    return answer;
}