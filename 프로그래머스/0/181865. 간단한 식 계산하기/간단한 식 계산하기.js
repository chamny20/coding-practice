function solution(binomial) {
    let [a, operator, b] = binomial.split(" ");
    let op = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    }
    
    return op[operator](Number(a), Number(b));
}