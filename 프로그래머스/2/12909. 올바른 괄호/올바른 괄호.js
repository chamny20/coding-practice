function solution(s){
    let stack = [];
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(1);
        } else if (s[i] === ')') {
            if (stack.length > 0)
                stack.pop();
            else
                return false;
        }
    }
    
    if (stack.length)
        return false;
    else
        return true;
}