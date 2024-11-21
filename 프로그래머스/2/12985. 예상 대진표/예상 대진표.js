function solution(n,a,b)
{
    var answer = 0;
    
    while (a!==b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        // console.log('a:', a)
        // console.log('b:', b)
        answer++;
    }
    

    return answer;
}