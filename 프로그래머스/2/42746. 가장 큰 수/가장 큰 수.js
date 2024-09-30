function solution(numbers) {
    let str = numbers.map((num) => String(num));
    let arr = str.sort((a,b) => (b+a) - (a+b)).join("");
    
    return arr[0]==="0" ? "0" : arr;
}