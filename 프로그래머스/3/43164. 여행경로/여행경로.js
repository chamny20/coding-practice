function solution(tickets) {
    var answer = [];
    let visited = new Array(tickets.length).fill(false);
    
    function dfs(routes) {
        if (routes.length === tickets.length + 1)
            answer.push(routes);
        
        for (let idx in tickets) {
            const [start, end] = tickets[idx];
            if (!visited[idx] && routes.at(-1) === start) {
                visited[idx] = true;
                dfs([...routes, end]);
                visited[idx] = false;
                
            }
        }
        
    }
    
    dfs(["ICN"]);
    
    return answer.sort()[0];
}