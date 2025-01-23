function solution(n, stations, w) {
    var answer = 0;
    let location = 1; // 탐색하는 아파트 위치
    let idx = 0;
    
    while (location <= n) {
        if (idx < stations.length && location >= stations[idx] - w) {
            location = stations[idx] + w + 1;
            idx += 1;
        } else {
            location += 2 * w + 1;
            answer += 1;
        }
    
        
    }

    return answer;
}