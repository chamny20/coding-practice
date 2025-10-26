function solution(k, m, score) {
    const n = score.length;
    const cnt = Math.floor(n / m); 
    
    const sortedScore = score.sort((a, b) => b - a);
    let ans = 0;
    
    for (let i=0; i<cnt; i++) {
        const arr = sortedScore.slice(i*m, i*m+m); // (0, m) -> (1*m, 2m)
        const min = Math.min(...arr);
        ans += min * m;
    }
    return ans;
}

/*
1점~k점까지 분류, k점이 최상품 사과 1점 최하품 사과
- 한상자에 사과 m개씩 담아 포장
- 가장 낮은 점수 p -> 한상자 가격: p*m

ex. k=3, m=4
[1, 2, 3, 1, 2, 3, 1]이면 -> [3, 3, 2, 2] 구성 -> 2 * 4 = 8 (이익)
*/