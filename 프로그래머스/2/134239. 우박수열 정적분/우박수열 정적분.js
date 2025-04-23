function solution(k, ranges) {
    const list = [[0, k]];
    let idx = 1;
    // 콜라츠 추측 반복문
    while (k > 1) {
        if (k % 2 === 0) {
            k /= 2;
        } else {
            k = 3 * k + 1;
        }
        list.push([idx, k]);
        idx++;
    }
    const areaList = [];
    
    // 사다리꼴 넓이 get
    for (let i=1; i<list.length; i++) {
        let a = list[i-1][1];
        let b = list[i][1];
        areaList.push((a + b) / 2);
    }
    // console.log(areaList);
    const initVal = areaList.length;
    
    const result = [];
    for (let i=0 ;i<ranges.length; i++) {
        const [_a, _b] = ranges[i]; 
        const a = _a;
        const b = initVal + _b; // a <= x <= b

        let sum = 0;
        for (let j=Math.min(a, b); j<Math.max(a, b); j++) {
            sum += areaList[j];
        }
        if (a > b) sum = -1;
        // console.log('sum', sum)
        result.push(sum);
    }
    
    
    return result;
}