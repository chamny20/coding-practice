function solution(priorities, location) {
    var answer = 0;
    let maxVal = Math.max(...priorities);
    let arr = [];
    
    for(let i = 0; i < priorities.length; i++){
        arr.push(i);
    }
    
    while(priorities.length !== 0) {
        maxVal = Math.max(...priorities);

        if (priorities[0] < maxVal) {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            answer++;
            priorities.shift();
            if (arr.shift() === location)
                return answer;
        }
    }
    
    return answer;
}