function solution(r1, r2) {
    let answer = 0;
    // 4 + 4
    
    // 1사분면만 먼저 구하기
    for (let x=1; x<=r2; x++) {
        // console.log('x', x)
        const maxH = Math.floor(Math.sqrt(r2**2 - x**2));
        const minH = Math.ceil(Math.sqrt(r1**2 - x**2)) || 0;
        answer += maxH - minH + 1;
        // console.log(answer)
    }
    
    return answer * 4;
}