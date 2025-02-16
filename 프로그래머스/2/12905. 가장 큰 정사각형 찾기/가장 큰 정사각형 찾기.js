function solution(board)
{
    const row = board.length;
    const col = board[0].length;
    
    for (let i=1; i<row; i++) {
        for (let j=1; j<col; j++) {
            if (board[i][j])
                board[i][j] = 1 + Math.min(board[i][j-1], board[i-1][j], board[i-1][j-1]);
        }
    }
    
    const maxVal = Math.max(...board.map(row => Math.max(...row)));
    return maxVal**2;
}