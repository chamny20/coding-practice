function solution(numbers) {
    const arr = numbers.map(el => String(el));
    
    arr.sort((a, b) => {
        let case1 = a + b;
        let case2 = b + a;
        
        return case2 - case1;
    });

    return arr[0] === '0' ? "0" : arr.join('');
    
}