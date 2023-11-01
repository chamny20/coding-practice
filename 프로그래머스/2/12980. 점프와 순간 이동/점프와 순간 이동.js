function solution(n)
{
    var result = 0;

    while(n>=2) {
        result += n % 2;
        n = Math.floor(n / 2);
    }
    

    return result+1;
}