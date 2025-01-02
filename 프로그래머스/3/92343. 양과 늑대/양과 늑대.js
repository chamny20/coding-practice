function solution(info, edges) {
    var answer = 0;
    const visited = Array(info.length).fill(false);
    const graph = Array.from({length: info.length}, () => []);
    
    // 그래프 지정 => 부모-자식 관계를 인접 리스트 형태로 저장
    edges.forEach(([parent, child]) => {
        graph[parent].push(child);
    })
    console.log(graph);
    
    const bfs = () => {
        const queue = [[1, 0, 0, graph[0]]]; // sheep, wolf, current node number, 방문 가능한 노드 리스트
        
        while (queue.length) {
            const [sheep, wolf, curIdx, nextNodes] = queue.shift();
            answer = Math.max(sheep, answer); // 양 최댓값 갱신
            
            // 방문 가능한 노드리스트 업데이트: 현재노드의 자식노드 + 방문가능 노드(nextNodes)를 합친 리스트
            // 현재 노드 제외, 중복 제거
            const newNextNodes = [...new Set([...nextNodes, ...graph[curIdx]])].filter((n) => n!==curIdx);
            
            for (const next of newNextNodes) {
                const newSheep = sheep + (info[next] === 0 ? 1: 0);
                const newWolf = wolf + (info[next] === 1 ? 1: 0);
                
                if (newSheep <= newWolf) continue;
                
                queue.push([newSheep, newWolf, next, newNextNodes.filter((n) => n!==next)]);
            }
        }
    }
    
    bfs();
    
    return answer;
}