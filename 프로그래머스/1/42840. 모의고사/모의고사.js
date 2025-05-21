function solution(answers) {
    let p1 = [1, 2, 3, 4, 5];
    let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const p1Len = answers.filter((answer, i) => answer === p1[i%p1.length]).length;
    const p2Len = answers.filter((answer, i) => answer === p2[i%p2.length]).length;
    const p3Len = answers.filter((answer, i) => answer === p3[i%p3.length]).length;

    const result = [];
    let max = Math.max(p1Len, p2Len, p3Len);
    
    if (max === p1Len) result.push(1);
    if (max === p2Len) result.push(2);
    if (max === p3Len) result.push(3);
    
    return result;
}