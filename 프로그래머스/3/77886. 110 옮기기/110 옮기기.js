function solution(s) {
    var answer = [];
    
    for (let i=0; i<s.length; i++) { // s 배열 속 str 순회
        let target = s[i];
        const stack = [];
        let str = "";
        
        for (let j=0; j<target.length; j++) { // "1110" 순회
            if (stack.length > 1) {
                const mid = stack.pop();
                const left = stack.pop();
                `${left}${mid}${target[j]}` === '110' ? str += '110' : stack.push(left, mid, target[j]);
            } else {
                stack.push(target[j]);
            }
        }
        
        const restStr = stack.join("");
        const lastZeroIdx = restStr.lastIndexOf('0');
        let result = '';
        if (lastZeroIdx === -1) 
            result = str + restStr;
        else
            result = restStr.slice(0, lastZeroIdx + 1) + str + restStr.slice(lastZeroIdx + 1);
        
        answer.push(result);
        // console.log('result', result)
    }
    
    return answer;
}