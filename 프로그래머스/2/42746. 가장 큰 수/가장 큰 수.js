function solution(numbers) {
    const transString = numbers.map((number) => String(number));
    const result = transString.sort((a,b) => (b+a) - (a+b)).join('');

    if(result[0]==="0")
        return "0";
    else
        return result;
    
}