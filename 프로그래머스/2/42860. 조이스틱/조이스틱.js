function solution(name) {
    let ans = 0;
    let move = name.length - 1;
    
    for (let i=0; i<name.length; i++) {
        if (name[i] !== 'A') {
            const diff = name[i].charCodeAt() - 'A'.charCodeAt();
            ans += Math.min(diff, 26 - diff);
        }
        
        // 앞이나 뒤로 가는 경우에서 더 가까운 곳을 선택
        let nextIndex = i + 1;
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        
        // move = Math.min(move, i + name.length - nextIndex);
        move = Math.min(move, i + name.length - nextIndex + Math.min(i, name.length - nextIndex));


        
    }
    
    return ans + move;
}