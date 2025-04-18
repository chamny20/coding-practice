function solution(word) {
    const list = ['A', 'E', 'I', 'O', 'U'];
    // case => 5**5 + 5**4 + 5**3 + 5**2 + 5
    
    const arr = [];
    
    const dfs = (str, len) => {
        if (len > 5) {
            return;
        }
        
        arr.push(str);
        
        for (const s of list) {
            dfs(str + s, len + 1);
        }
    }
    dfs('', 0);
    return arr.indexOf(word);
}