function solution(common) {
    var answer = 0;
    const arr = [];
    
    for (let i=0; i<common.length-1; i++) {
        arr.push(common[i+1] - common[i]);
    }
    
    const set = new Set(arr);
    if (set.size === 1) {
        answer = common[common.length - 1] + arr[0];
    } else {
        const r = arr[1] / arr[0];
        answer = common[common.length - 1] * r;
    }
    
    return answer;
}