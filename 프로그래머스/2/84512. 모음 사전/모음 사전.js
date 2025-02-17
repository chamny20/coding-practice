function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    // 모든 경우의 수 => 5**5  + 5**4 + 5**3 + 5**2 + 5
    const arr = [];

    const dfs = (cur, len) => {
        if (len > 5) {
            return;
        }
        arr.push(cur);
        
        for (const str of vowels) {
            dfs(cur + str, len + 1);
        }
    }
    dfs('', 0);
    console.log(arr)
    
    return arr.indexOf(word);
}