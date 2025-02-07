function solution(queue1, queue2) {
    let answer = 0;

    let queue1Sum = queue1.reduce((acc, val) => acc + val, 0);
    let queue2Sum = queue2.reduce((acc, val) => acc + val, 0);
    const targetSum = Math.floor((queue1Sum + queue2Sum) / 2);
    const totalLen = queue1.length + queue2.length;

    let idx1 = 0;
    let idx2 = 0;
    
    while (queue1Sum !== queue2Sum) {
        if (queue1Sum > queue2Sum) {
            queue1Sum -= queue1[idx1];
            queue2.push(queue1[idx1]);
            queue2Sum += queue1[idx1];
            idx1++;
        } else if (queue1Sum < queue2Sum) {
            queue2Sum -= queue2[idx2];
            queue1.push(queue2[idx2]);
            queue1Sum += queue2[idx2];
            idx2++;
        } 
        answer++;
        if (idx1 > totalLen || idx2 > totalLen) return -1;
    }

    return answer;
}
