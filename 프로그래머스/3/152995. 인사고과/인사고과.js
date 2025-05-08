function solution(scores) {
    const target = scores[0];
    
    scores.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return b[0] - a[0];
    })
    
    let maxB = 0;
    const list = [];
    
    for (const [a, b] of scores) {
        if (b < maxB) {
            // 탈락
            if (a === target[0] && b === target[1]) return -1;
        } else {
            list.push([a, b]);
            maxB = Math.max(maxB, b);
        }
    }
    
    console.log(list)
    const targetSum = target[0] + target[1];
    // 동석차 가능
    
    let rank = 1;
    for (const [a, b] of list) {
        if (a + b > targetSum) rank++;
    }
    return rank;
}