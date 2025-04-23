function solution(n, times) {
    const k = times.length;
    let left = 1;
    let right = Math.max(...times) * n; // 60

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // mid분동안 심사 가능한 명수
        let total = times.reduce((sum, time) => sum += Math.floor(mid / time), 0);
        if (total >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}