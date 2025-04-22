function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => {
        if (a[col-1] === b[col-1]) return b[0] - a[0];
        return a[col-1] - b[col-1];
    });
    
    let result = [];
    
    for (let i=row_begin; i<=row_end; i++) {
        const list = data[i-1];
        let sum = 0;
        for (let j=0; j<list.length; j++) {
            sum += list[j] % i;
        }
        result.push(sum);
    }

    let ans = result[0];
    for (let i=1; i<result.length; i++) {
        ans ^= result[i];
    }
    
    return ans;
}