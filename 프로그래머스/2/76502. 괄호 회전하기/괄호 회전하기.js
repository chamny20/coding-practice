function solution(s) {
    var answer = 0;
    let arr = s.split("");
    
    for (let i=0; i<arr.length; i++) {
        if(i!==0) {
            arr.push(arr.shift());
        }
        
        let stack = [];
        console.log(arr);
          // 짝 맞는지 로직 체크
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === '['|| arr[i] === '(' || arr[i] === '{') {
                stack.push(arr[i]);
            } else {
                if (stack.length > 0)
                    stack.pop();
                else
                    return false;
            }
        }
        if (stack.length===0) answer++;
    }
    
    
  
    
    return answer;
}