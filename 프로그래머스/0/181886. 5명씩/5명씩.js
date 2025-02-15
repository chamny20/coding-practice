function solution(names) {
    var answer = [];
    names.forEach((name, idx) => {
        if (idx % 5 === 0)
            answer.push(name);
    })
    return answer;
}