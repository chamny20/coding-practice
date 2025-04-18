function solution(expression) {
    const combs = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['*', '-', '+'],
        ['*', '+', '-']
    ];
    
    // 수식 분리
    const arr = expression.split(/(\D)/);
    
    // 연산자 개수
    let temp = arr.filter(el => isNaN(Number(el)));
    const isOpCnt = new Set(temp).size;
    let max = 0;
    
    for (const comb of combs) {
        let tmp = [...arr];

        for (const op of comb) {
            while (tmp.includes(op)) {
                let idx = tmp.indexOf(op);
                let val = eval(`${tmp[idx-1]}${op}${tmp[idx+1]}`);
                tmp.splice(idx-1, 3, val.toString());
                // console.log(tmp);
            }
        }
        max = Math.max(max, Math.abs(Number(tmp[0])));
    }
    
    return max;
}