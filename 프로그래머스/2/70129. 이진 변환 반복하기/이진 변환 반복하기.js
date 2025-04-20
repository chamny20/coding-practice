function solution(s) {
    let ans = 0;
    let str = s;
    let cnt = 0;
    
    while (str !== '1') {
        const len = str.length;
        let arr = str.split('0');
        const afterLen = arr.join('').length;
        
        ans += len - afterLen;
        str = afterLen.toString(2);
        cnt++;
    }
    
    return [cnt, ans];
}

