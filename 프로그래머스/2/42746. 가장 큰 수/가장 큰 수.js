function solution(numbers) {
    let arr = [];
    numbers = numbers.map((num) => String(num));
    
    numbers.sort((a, b) => {
        const num1 = a.toString() + b.toString();
        const num2 = b.toString() + a.toString();
        return num1 > num2 ? -1 : 1;
    })
    let answer = numbers.join('');
    
    return Number(answer) === 0 ? '0' : answer;
}