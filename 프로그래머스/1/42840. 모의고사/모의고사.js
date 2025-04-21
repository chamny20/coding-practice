function solution(answers) {
    const p1 = [1, 2, 3, 4, 5]; // 5
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
    
    const obj = { '1': 0, '2': 0, '3': 0};
    const n = answers.length;
    
    for (let i=0; i<n; i++) {
        const num = answers[i];
        if (num === p1[i%5]) {
            obj['1']++;
        }
        if (num === p2[i%8]) {
            obj['2']++;
        }
        if (num === p3[i%10]) {
            obj['3']++;
        }
        
    }
    const ans = [];
    
    const max = Math.max(...Object.values(obj));
    for (const key in obj) {
        if (max === obj[key]) ans.push(Number(key));
    }
     
    return ans;
}