function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    let avail = B.filter((item) => item > A[0]).sort((a, b) => a - b);

    for (let i=0; i<A.length; i++) {
        let num = A[i];
        // console.log('num', num);
        // console.log('avail전', avail);
        while (num >= avail[0]) {
            avail.shift();
        }
        
        if (num < avail[0]) {
            avail.shift();
            answer++;
        } 
        
        // console.log('avail후', avail);
        // console.log('answer', answer)
    }
    
    return answer;
}