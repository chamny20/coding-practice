function solution(s) {
    const result = [];
    const temp = [];
    
    for (let i=0; i<s.length; i++) {
        if (!temp.includes(s[i])) {
            result.push(-1);
            temp.push(s[i]);
        } else {
            result.push(i - temp.lastIndexOf(s[i]));
            temp.push(s[i]);
        }
    }
    
    return result;
}