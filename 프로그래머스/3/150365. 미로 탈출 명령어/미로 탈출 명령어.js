function solution(n, m, x, y, r, c, k) {
    let answer = 'impossible';
    const dir = [[1, 0], [0, -1], [0, 1], [-1, 0]];
    const st = ['d', 'l', 'r', 'u']; // 사전순 탐색
    const diff = k - (Math.abs(r - x) + Math.abs(c - y));

    if (diff < 0 || diff % 2 !== 0) return answer;

    const dfs = (dep, numX, numY, tmpStr) => {
        if (answer !== 'impossible') return; // 이미 답을 찾은 경우 탐색 중단

        if (dep === k) {
            if (numX === r && numY === c) {
                answer = tmpStr; // 첫 번째로 발견한 답이 사전순 최소
            }
            return;
        }

        for (let i = 0; i < dir.length; i++) {
            const nx = numX + dir[i][0];
            const ny = numY + dir[i][1];

            if (nx > 0 && ny > 0 && nx <= n && ny <= m) {
                const remainingDist = Math.abs(r - nx) + Math.abs(c - ny);
                const remainingSteps = k - (dep + 1);

                if (remainingDist <= remainingSteps && (remainingSteps - remainingDist) % 2 === 0) {
                    dfs(dep + 1, nx, ny, tmpStr + st[i]);
                }
            }
        }
    };

    dfs(0, x, y, '');
    return answer;
}
