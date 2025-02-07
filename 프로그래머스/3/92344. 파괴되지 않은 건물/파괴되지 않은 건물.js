function solution(board, skill) {
    var answer = 0;
    let n = board.length;
    let m = board[0].length;
    const accArr = Array.from(Array(n+1), () => Array(m+1).fill(0));
    
    skill.forEach((list, _) => {
        const [type, r1, c1, r2, c2, degree] = list;
        let d = type === 1 ? -degree : degree;
        
        accArr[r1][c1] += d;
        accArr[r1][c2+1] += -d;
        accArr[r2+1][c1] += -d;
        accArr[r2+1][c2+1] += d;
    });
    
    for (let r=0; r<accArr.length; r++) {
        for (let c=1; c<accArr[0].length; c++) {                
            accArr[r][c] += accArr[r][c-1];
        }
    }
        
    for (let r=1; r<accArr.length; r++) {
        for (let c=0; c<accArr[0].length; c++) {
            accArr[r][c] += accArr[r-1][c];
        }
    }
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            board[i][j] += accArr[i][j];
        }
    }
    
    const filteredBoard = board.map(list => list.filter(num => num > 0).length);
    answer = filteredBoard.reduce((sum, num, _) => sum + num, 0);
    
    return answer;
}