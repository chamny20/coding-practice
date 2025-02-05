function solution(arr) {
    var answer = [0, 0];
    let n = arr.length;
    
    const divide = (row, col, len) => {
        let isValid = true;
        
        for (let i=row; i<row+len; i++) {
            for (let j=col; j<col+len; j++) {
                if (arr[row][col] !== arr[i][j])
                    isValid = false;
            }
        }
        
        let half = len / 2;
        
        if (isValid) {
            if (arr[row][col] === 1)
                answer[1] += 1;
            else
                answer[0] += 1;
        } else {
            divide(row, col, half);
            divide(row+half, col, half);
            divide(row, col+half, half);
            divide(row+half, col+half, half);
        }
        
    }
    
    divide(0, 0, n);
   
    
    return answer;
}