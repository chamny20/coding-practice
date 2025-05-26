function solution(word) {
    const list = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    
    const dfs = (str, len) => {
        if (len > 5) return;
        
        dictionary.push(str);
        
        for (const s of list) {
            dfs(str + s, len + 1);
        }
    }
    
    dfs('', 0);
    
    return dictionary.indexOf(word);
}