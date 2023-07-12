function solution(number, limit, power) {
    var answer = 0;
    let result = [];
    let num = 1;
    let sum = 0;
  
    while (num <= number) {
        for(let i=1; i<= num/2; i++) {
            if(num % i == 0 ) {
                sum+=1;
            }
        }
        sum++;
        result.push(sum);
        num++;
        sum=0;
    }
    
    for (let i=0; i<result.length; i++) {
        if(result[i]>limit) 
            result[i] = power;
        answer += result[i];
    }
    return answer;
}