const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const teamN = n / 2;
const arr = input.map((line) => line.split(' ').map(Number));
let minVal = Infinity;
const visited = Array(n).fill(false);

const getTeamScore = (team) => {
    let score = 0;
    for (let i=0; i<team.length; i++) {
        for (let j=0; j<team.length; j++) {
            score += arr[team[i]][team[j]];
        }
    }
    return score;
}

const dfs = (idx, cnt) => { // cnt는 현재까지 팀에 포함된 사람의 수
    // N/2명 선택 시 두 팀 나누기
    if (cnt === n/2) {
        const startTeam = [];
        const linkTeam = [];
        
        for (let i=0; i<n; i++) {
            if (visited[i]) startTeam.push(i);
            else linkTeam.push(i);
        }
        
        const startScore = getTeamScore(startTeam);
        const linkScore = getTeamScore(linkTeam);
        
        minVal = Math.min(minVal, Math.abs(startScore - linkScore));
        return;
    }
    
    for (let i=idx; i<n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i+1, cnt+1);
            visited[i] = false;
        }
    }
    
 
}

dfs(0, 0);
console.log(minVal);
