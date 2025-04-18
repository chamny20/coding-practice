function solution(numbers) {
    const strArr = numbers.map(el => el.toString()).sort((a, b) => {
        const num1 = a + b;
        const num2 = b + a;
        return num1 > num2 ? -1 : 1;
    });
    
    if (strArr[0] === '0') return '0';
    return strArr.join('');
    
}