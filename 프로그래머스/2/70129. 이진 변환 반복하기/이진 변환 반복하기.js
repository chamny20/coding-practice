function solution(s) {
    const result = [0, 0];
    let cnt = 0;
    
    while (s !== '1') {
        s = s.split('');
        result[0]++;
        const fiteredLen = s.filter(el => el === '0').length;
        result[1] += fiteredLen;
        let len = s.length - fiteredLen;
        s = len.toString(2);
    }
    
    return result;
}

