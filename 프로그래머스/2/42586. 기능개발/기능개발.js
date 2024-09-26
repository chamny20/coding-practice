function solution(progresses, speeds) {
    let arr = [];
    let ans = [];
    let task = progresses.map((x) => 100 - x);
    // console.log("task", task);
    
    let rest = task.map((x, idx) => Math.ceil(x / speeds[idx]));
    
    let cnt = 1;
    let maxDay = rest[0];
    
    for (let i=1; i<rest.length; i++) {
        if(rest[i] > maxDay) {
            maxDay = rest[i];
            ans.push(cnt);
            cnt = 1;
        } else {
            cnt++;
        }
    }
    ans.push(cnt);
    return ans;
}