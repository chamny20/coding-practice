function solution(n, k, enemy) {
    if (k >= enemy.length) return enemy.length;
    const len = enemy.length;
    
    const check = (arr) => {
        // 큰 적 k명 고르기 -> 무적권
        const sorted = [...arr].sort((a, b) => b - a);
        const skip = sorted.slice(0, k);
        const rest = sorted.slice(k);
        
        const sum = rest.reduce((sum, num) => sum += num, 0);
        return sum <= n; // n이 크거나 같아야 함
    }
    
    let ans = 0;    
    // 최대 몇 라운드까지 버틸 수 있는지.. 이진 탐색 활용하기
    let left = 0;
    let right = len;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(enemy.slice(0, mid))) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}