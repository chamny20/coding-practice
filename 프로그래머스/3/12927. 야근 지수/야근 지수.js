function solution(n, works) {
    let sum = works.reduce((sum, num, _) => sum += num);
    if (sum < n) return 0;
    
    works.sort((a, b) => a - b);
    const len = works.length;
    
    while (n > 0) {
        let max = works[len - 1];
        for (let i=len-1; i>=0; i--) {
            if (works[i] >= max) {
                works[i]--;
                n--;
            }
            if (!n) break;
        }
    }
    const ans = works.reduce((sum, num, _) => sum += num**2, 0);
    return ans;
}