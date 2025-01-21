function solution(num_list) {
    var answer = 0;
    let oddSum = 0, evenSum = 0;
    
    num_list.forEach((num, idx) => {
       if ((idx+1) % 2 === 0)
           evenSum += num;
        else
            oddSum += num;
        
    });
    
    answer = Math.max(evenSum, oddSum);
    
    return answer;
}