function solution(begin, target, words) {
    let answer = 0;
    const graph = []; // 인접 리스트 담을 그래프
    
    const isConnected = (str1, str2) => {
        let cnt = 0;
        
        for (let i=0; i<str1.length; i++) {
            if (str1[i] !== str2[i]) cnt++;
        }
        
        return cnt===1 ? true : false;
    }
    
    
    const bfs = (begin, target) => {
        const queue = [[begin, 0]];
        const visited = new Set();
        
        while (queue.length) {
            const [cur, cnt] = queue.shift();
            visited.add(cur);
            
            if (cur === target) return cnt;
            
            for (const word of words) {
                if (isConnected(word, cur) && !visited.has(word)) {
                    queue.push([word, cnt+1]);
                }
            }
            
        }
        return 0;
    }
    
    // if (!words.includes(target)) return 0;
    
    answer = bfs(begin, target);
    
    return answer;
}

