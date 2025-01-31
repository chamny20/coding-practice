function solution(number, k) {
    const stack = [];
    
    for (let i=0; i<number.length; i++) {
        const str = Number(number[i]);
        
        while (number.length > 0 && k > 0 && stack.at(-1) < str) {
            stack.pop();
            k--;
        }
        stack.push(str);
    }
    
    return stack.slice(0, number.length - k).join('');
}