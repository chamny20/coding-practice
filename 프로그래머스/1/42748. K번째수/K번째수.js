function solution(array, commands) {
    const ans = [];
    
    commands.forEach(list => {
        const [start, end, i] = list;
        const arr = array.slice(start-1, end).sort((a, b) => a - b);
        ans.push(arr[i-1]);
    });
    
    return ans;
}