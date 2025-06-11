function solution(number, k) {
    const stack = [];
    
    for (let i=0; i<number.length; i++) {
        const num = Number(number[i]);

        while (stack.length > 0 && k > 0 && stack.at(-1) < num) {
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    return stack.slice(0, number.length - k).join('');
}