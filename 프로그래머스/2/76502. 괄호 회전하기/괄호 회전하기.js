function solution(s) {
    var answer = 0;
    let arr = s.split("");
    
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            arr.push(arr.shift());
        }
        
        let stack = [];
        let isValid = true;

        // 짝이 맞는지 로직 체크
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === '[' || arr[j] === '(' || arr[j] === '{') {
                stack.push(arr[j]);
            } else {
                if (stack.length > 0) {
                    let last = stack.pop();
                    if (
                        (arr[j] === ')' && last !== '(') ||
                        (arr[j] === ']' && last !== '[') ||
                        (arr[j] === '}' && last !== '{')
                    ) {
                        isValid = false;
                        // break;
                    }
                } else {
                    isValid = false;
                    // break;
                }
            }
        }
        
        if (isValid && stack.length === 0) answer++;
    }
    
    return answer;
}
