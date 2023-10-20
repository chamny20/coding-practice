function solution(n) {
    if(n==0)
        return 0;
    if(n==1||n==2)
        return 1;
    
    let fibo = [0,1,1];
    
    for(let i=3; i<=n; i++) {
        fibo[i] = (fibo[i-1] + fibo[i-2])%1234567; 
    }
    
    
    return fibo[n];
}


/*
first try :런타임 시간 초과 문제 발생
=> 중복호출이 많을 경우 런타임이 길어진다!



*/
