function solution(numbers) {
    var answer = 0;
    let sum = 0;
    numbers.forEach((x) => sum += x);
    return sum/numbers.length;
}