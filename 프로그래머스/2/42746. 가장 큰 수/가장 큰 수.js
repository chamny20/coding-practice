function solution(numbers) {
    // const strArr = numbers.map(el => el.toString()).sort((a, b) => {
    //     const num1 = a + b;
    //     const num2 = b + a;
    //     return num1 > num2 ? -1 : 1;
    // });
    const strArr = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    
    return Number(strArr.join('')) === 0 ? '0' : strArr.join('');
    
}