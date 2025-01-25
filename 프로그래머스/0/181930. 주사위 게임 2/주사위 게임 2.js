function solution(a, b, c) {
    var answer = 0;
    
    if (a === b && b === c) 
        answer = (a+b+c) * (a*a + b*b + c*c) * (Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3));
    else if (a !== b && b !== c && a !== c)
        answer = a + b + c;
    else 
        answer = (a + b + c) * (a*a + b*b + c*c);
    
    return answer;
}