function solution(N, stages) {
    let ans = [];
    let fail = [];
    
    for (let i=1; i<=N; i++) { // N=1~5
        let cnt = 0;
        let failCnt = 0;
        for (let j=0; j<stages.length; j++) {
           
            if (stages[j] >= i) {
                cnt++;
            }
            if (stages[j] === i)
                failCnt++;
        }
        fail.push([i, failCnt / cnt]);
        
    }
    
    fail.sort((a,b) => b[1] - a[1]);
    fail.map((item, idx)=> {
        ans.push(item[0]);
    })
    return ans;
}