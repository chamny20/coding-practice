function solution(s){
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        const str = s[i];
        
        if (str === ')') {
            if (stack.pop() !== '(') return false; 
        } else {
            stack.push(str);
        }
    }
    return stack.length > 0 ? false : true;
}