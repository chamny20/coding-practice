function solution(k, dungeons) {
    let answer = 0;
    const len = dungeons.length;
    const visited = Array(len).fill(false);
    
    const dfs = (cur, cnt) => {
        answer = Math.max(answer, cnt);
        
        for (let i=0; i<len; i++) {
            const [needs, consumption] = dungeons[i];
            
            if (!visited[i] && cur >= needs) {
                visited[i] = true;
                dfs(cur-consumption, cnt+1);
                visited[i] = false;
            }
        }
        
    }
    dfs(k, 0);
 
    return answer;
}

/* 
하루에 한번 탐험 가능
최대한 많이 탐험해야 함
k: 유저 현재 피로도
dungenos
최소 필요 피로도, 소모 피로도

*/