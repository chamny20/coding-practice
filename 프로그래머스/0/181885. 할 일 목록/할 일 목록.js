function solution(todo_list, finished) {
    var answer = [];
    finished.forEach((val, idx) => {
        if (!val)
            answer.push(todo_list[idx]);
    })
    return answer;
}