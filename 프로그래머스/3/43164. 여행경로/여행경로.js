function solution(tickets) {
    tickets.sort();
    
    const n = tickets.length;
    const visited = Array(n).fill(false);
    
    const dfs = (arr) => {
        if (arr.length === n + 1) {
            return arr;
        }

        for (let i=0; i<n; i++) {
            const [start, end] = tickets[i];
            
            if (!visited[i] && arr[arr.length - 1] === start) {
                visited[i] = true;
                const result = dfs([...arr, end]);
                visited[i] = false;
                
                if (result) return result;
            }
        }
        return null;
    }
    
    const ans = dfs(['ICN']);
    
    return ans;
}