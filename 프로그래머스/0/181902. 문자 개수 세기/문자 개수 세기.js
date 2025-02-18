function solution(my_string) {
    let answer = Array(52).fill(0);
    // A 65 a 97
    for (const str of my_string) {
        let num = str.charCodeAt();
        if (num >= 97) 
            answer[num - 97 + 26]++;
        else 
            answer[num - 65]++;
    }
    
    
    return answer;
}