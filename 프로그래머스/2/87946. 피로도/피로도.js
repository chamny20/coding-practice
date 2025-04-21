function solution(k, dungeons) {
    const n = dungeons.length;
    const visited = Array(n).fill(false);
    let ans = 0;
    
    const dfs = (cur, cnt) => {
        ans = Math.max(ans, cnt);
        
        for (let i=0; i<n; i++) {
            const [a, b] = dungeons[i];

            if (!visited[i] && cur >= a) {
                visited[i] = true;
                dfs(cur - b, cnt + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    
    return ans;
}
