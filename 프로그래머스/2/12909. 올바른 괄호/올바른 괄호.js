function solution(s){
    let answer = false;
    let stack = 0;
    //stack은 결국 0이 되어야 함
    
    for (let i=0; i<s.length; i++) {
        stack += s[i] =='(' ? +1 : -1; 
      
        if (stack < 0)
            return answer;
    }
    
    if (stack == 0)
        answer = true;
    else
        answer = false;


    return answer;
}