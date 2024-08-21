function solution(a, b) {
    let rule = a.toString() + b.toString();
    
    return rule < 2 * a * b ? 2 * a * b : Number(rule);
   
}