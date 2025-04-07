function solution(orders, course) {
    // 조합 함수
    const getCombination = (arr, n) => {
        const result = [];
        if (n === 1) return arr.map(v => [v]);
        
        arr.forEach((select, idx) => {
            const rest = arr.slice(idx + 1);
            const combis = getCombination(rest, n-1);
            const combine = combis.map((v) => [select, ...v]);
            result.push(...combine);
        })
        return result;
    };
    
    const ans = [];
   
    for (let i=0; i<course.length; i++) {
        const n = course[i];
        const menu = [];
        
        orders.forEach(item => {
            let arr = getCombination(item.split('').sort(), n);
            menu.push(...arr);
        });
        const counter = {};
        
        // console.log(menu);
        for (const m of menu) {
            let key = m.join('');
            counter[key] = (counter[key] || 0) + 1;
        }
        // console.log(counter);
        const max = Math.max(...Object.values(counter));
        
        if (max > 1) {
            for (const key in counter) {
                if (counter[key] === max)
                    ans.push(key);
            }
        }
        // console.log(ans)
    }
    
  
    return ans.sort();
}