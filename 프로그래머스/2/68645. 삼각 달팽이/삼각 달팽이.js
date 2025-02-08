function solution(n) {
    let result = Array.from(Array(n), () => Array(n).fill(0));
    const dir = [[1, 0], [0, 1], [-1, -1]]; // row 증가, col 증가, row & col 감소
    
    let dirIdx = 0;
    let row = -1;
    let col = 0;
    let value = 1;
    
    while (n > 0) {
        const [nRow, nCol] = dir[dirIdx];
        // console.log('n', n);
        for (let i=0; i<n; i++) {
            row += nRow;
            col += nCol;
            // console.log('asd', [row, col]);
            result[row][col] = value;
            value++;
        }
        dirIdx = (dirIdx + 1) % 3;
        n--;
    }
    // console.log('result', result);
    
    const ans = [];
    result.forEach(list => {
        list.forEach(num => {
            if (num > 0)
                ans.push(num);
        })
    });
    // console.log(ans);
    
    return ans;
}