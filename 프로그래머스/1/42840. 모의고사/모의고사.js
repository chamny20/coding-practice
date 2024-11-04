function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const result = [];
    
    let p1Len = answers.filter((num, i) => num === p1[i%p1.length]).length;
    let p2Len = answers.filter((num, i) => num === p2[i%p2.length]).length;
    let p3Len = answers.filter((num, i) => num === p3[i%p3.length]).length;
    
    let max = Math.max(p1Len, p2Len, p3Len);
    if (max === p1Len) result.push(1);
    if (max === p2Len) result.push(2);
    if (max === p3Len) result.push(3);
    
    return result;
    
}