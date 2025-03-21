function solution(str1, str2) {
    str1 = str1.split('').map(str => str.toUpperCase()).join('');
    str2 = str2.split('').map(str => str.toUpperCase()).join('');
    const str1Set = [];
    const str2Set = [];
    
    const makeSet = (str, set) => {
        for (let i=0; i<str.length-1; i++) {
        let tmp = str.slice(i, i+2);
        // console.log('tmp', tmp)
        
        let isValid = false;
        for (let j=0; j<tmp.length; j++) {
            const st = tmp[j];
            // console.log(str.charCodeAt());
            if (65 <= st.charCodeAt() && st.charCodeAt() <= 90) {
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }
        if (isValid)
            set.push(tmp);
        }
        return set;
    }
    
    const st1 = makeSet(str1, str1Set).sort();
    const st2 = makeSet(str2, str2Set).sort();
    console.log(st1);
    console.log(st2);
    
    let common = 0;
    let sumCnt = 0;
    let i=0;
    let j=0;
    while (i<st1.length && j<st2.length) {
        if (st1[i] === st2[j]) {
            common++;
            sumCnt++;
            i++;
            j++;
        } else if (st1[i] < st2[j]) {
            i++;
            sumCnt++;
        } else {
            j++;
            sumCnt++;
        }
    }
    sumCnt += (st1.length - i) + (st2.length - j);
    const answer = sumCnt === 0 ? 65536 : Math.floor((common / sumCnt) * 65536);
    
    return answer;
}