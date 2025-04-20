function solution(progresses, speeds) {
    const arr = [];
    
    for (let i=0; i<progresses.length; i++) {
        const remain = 100 - progresses[i];
        let val = Math.ceil(remain / speeds[i]);
        arr.push(val);
    }
    
    const result = [];
    let maxDay = arr[0];
    let cnt = 1;

    for (let i=1; i<arr.length; i++) {
        if (maxDay < arr[i]) {
            maxDay = arr[i];
            result.push(cnt);
            cnt = 1;
        } else {
            cnt++;
        }
    }
    result.push(cnt);
    
    return result;
}