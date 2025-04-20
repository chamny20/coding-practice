function solution(tickets) {
    const visited = Array(tickets.length).fill(false);
    const ans = [];
    
    const dfs = (arr) => {
        if (arr.length === tickets.length + 1) 
            ans.push(arr);
        
        for (let i=0; i<tickets.length; i++) {
            const [start, end] = tickets[i];
            
            if (!visited[i] && arr.at(-1) === start) {
                visited[i] = true;
                dfs([...arr, end]);
                visited[i] = false;
            }
        }
    }
    dfs(['ICN']);
    
    return ans.sort()[0];
}