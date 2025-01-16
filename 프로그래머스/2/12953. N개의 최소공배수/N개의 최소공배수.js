function solution(arr) {
    var answer = 1;
    
    const getGCD = (a, b) => {
        if (b === 0) return a;
        if (a % b === 0) return b;
        else return getGCD(b, a%b);
    }
    
    for (let i=0; i<arr.length; i++) {
        answer = (answer * arr[i]) / getGCD(answer, arr[i]);
    }
    
    return answer;
}