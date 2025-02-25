function getCombinations(arr, selectNum) {
    const result = [];
    function dfs(start, chosen) {
        if (chosen.length === selectNum) {
            result.push([...chosen]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            chosen.push(arr[i]);
            dfs(i + 1, chosen);
            chosen.pop();
        }
    }
    dfs(0, []);
    return result;
}

function solution(n, q, ans) {
    let answer = 0;
    let lst = Array.from({ length: n }, (_, i) => i + 1);
    let index = ans.map((v, i) => v === 0 ? i : -1).filter(i => i !== -1);
    let m = ans.length;

    index.forEach(i => {
        q[i].forEach(num => {
            let idx = lst.indexOf(num);
            if (idx !== -1) lst.splice(idx, 1);
        });
    });

    let combinations = getCombinations(lst, 5);
    
    combinations.forEach(c => {
        for (let i = 0; i < m; i++) {
            let cnt = q[i].reduce((acc, num) => acc + (c.includes(num) ? 1 : 0), 0);
            if (cnt !== ans[i]) return;
        }
        answer++;
    });
    
    return answer;
}
