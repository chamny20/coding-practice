function solution(arr, k) {
    let answer = Array.from(new Set(arr));
    
    while (answer.length < k) {
        answer.push(-1);
    }
    
    return answer.slice(0, k);
}