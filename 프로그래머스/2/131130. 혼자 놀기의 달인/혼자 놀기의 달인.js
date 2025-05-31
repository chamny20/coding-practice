function solution(cards) {
    const n = cards.length;
    const groups = [];
    const visited = Array(n).fill(false);

    const dfs = (cur, cnt = 0) => {
        if (visited[cur]) return cnt;
        visited[cur] = true;
        
        let next = cards[cur] - 1;
        return dfs(next, cnt + 1);
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            const group = dfs(i);
            groups.push(group);
        }
    }

    groups.sort((a, b) => b - a);
    
    return groups.length > 1 ? groups[0] * groups[1] : 0;
}