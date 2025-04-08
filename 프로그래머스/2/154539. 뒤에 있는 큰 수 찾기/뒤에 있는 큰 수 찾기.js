function solution(numbers) {
    const n = numbers.length;
    const result = Array(n).fill(-1);
    const stack = [];
    
    for (let i=0; i<numbers.length; i++) {
        while (stack.length && numbers[i] > numbers[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = numbers[i];
        }
        stack.push(i);
    }
    
    return result;
}