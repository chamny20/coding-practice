function solution(user_id, banned_id) {
    const check = Array(user_id.length).fill(false);
    const set = new Set();
    const regex = banned_id.map(item => new RegExp(`^${item.replaceAll("*", ".")}$`));

    const dfs = (idx, arr) => {
        if (idx === banned_id.length) {
            set.add(arr.sort().join("."));
            // console.log(set)
        } else {
            for (let i=0; i<user_id.length; i++) {
                if (check[i]) continue;
                
                if (user_id[i].match(regex[idx])) {
                    check[i] = true;
                    dfs(idx + 1, [...arr, user_id[i]]);
                    check[i] = false;
                }
                    
            }
        }
    }
    
    dfs(0, []);
    
    return set.size;
}