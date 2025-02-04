function solution(numbers) {
    let result = 0;
    numbers.sort();
    let arr = Array.from(Array(10), (_, idx) => idx);
    
    arr.forEach((num, idx) => {
        if (!numbers.includes(num)) 
            result += num;
    })
    
    return result;
}