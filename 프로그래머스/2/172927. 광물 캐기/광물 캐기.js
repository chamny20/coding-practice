function solution(picks, minerals) {
    let ans = Infinity;
    const mineralIdx = {
        'diamond': 0,
        'iron': 1,
        'stone': 2
    }
    
    const minus = {
        'diamond': [1, 1, 1],
        'iron': [5, 1, 1],
        'stone': [25, 5, 1],
    }
    
    const dfs = (picks, idx, total) => {
        const [diaP, ironP, stoneP] = picks;
        
        if (diaP === 0 && ironP === 0 && stoneP === 0) {
            ans = Math.min(ans, total);
            return;
        }
        const arr = [['diamond', diaP], ['iron', ironP], ['stone', stoneP]];
        
        for (const [name, cnt] of arr) {
            // console.log('name', name, cnt);
            if (cnt > 0) {
                let sum = 0;
                for (let i=0; i<5 && idx+i<minerals.length; i++) {
                    const mineral = minerals[idx + i];
                    // console.log("mineral", mineral);
                    sum += minus[name][mineralIdx[mineral]];
                }
                // console.log('sum', sum);
                dfs(
                    [name === 'diamond' ? diaP - 1 : diaP,
                    name === 'iron' ? ironP - 1 : ironP,
                    name === 'stone' ? stoneP - 1 : stoneP],
                    idx + 5, 
                    total + sum
                   )
            }
            
        }
    }
    
    dfs(picks, 0, 0);

    
    return ans;
}