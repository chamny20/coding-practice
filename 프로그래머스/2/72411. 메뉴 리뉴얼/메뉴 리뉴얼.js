function solution(orders, course) {
    var answer = [];
    
    function combinations(arr, n) {
        if (n === 1) return arr.map((item) => [item]);
        const result = [];
        
        arr.forEach((fixed, idx, arr) => {
            const rest = arr.slice(idx+1);
            const combis = combinations(rest, n-1);
            const combine = combis.map((v) => [fixed, ...v]);
            result.push(...combine);
        })
        return result;
    }
    
    for (let c of course) {
        const menu = [];
        for (let i=0; i<orders.length; i++) {
            let arr = orders[i].split("").sort();
            let cmb = combinations(arr, c);
            menu.push(...cmb);
        }
        // console.log(menu);
        const counter = {};
        
        for (const m of menu) {
            let key = m.join("");
            counter[key] = (counter[key] || 0) + 1;
            // console.log(counter);
            
        }
        const max = Math.max(...Object.values(counter));
            if (max > 1) {
                for (const [key, value] of Object.entries(counter)) {
                    if (value === max)
                        answer.push(key);
                }
            }
        
    }
    
    return answer.sort();
}