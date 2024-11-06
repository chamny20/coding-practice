function solution(board, moves) {
	let n = board[0].length;
    let answer = 0;
    let boardArr = new Array(n).fill(n).map(() => []);
    let stack = [];
    
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board.length; j++) {
            if (board[j][i]!==0)
                boardArr[i].push(board[j][i]);
        }
        boardArr[i].reverse();
        // console.log(boardArr);
    }
    
    for (let i=0; i<moves.length; i++) {
        let idx = moves[i]-1;
        // console.log('here', boardArr[idx]);
        if (boardArr[idx].length > 0) {
            let picked = boardArr[idx].pop();
            
            if (stack.length>0 && stack[stack.length-1] === picked)                            {
                console.log('hi', boardArr[idx])
                stack.pop();
                answer += 2;
            } else {
                stack.push(picked);
            }
            // console.log(stack);
            
        }
        
    }
    
    return answer;
    
}
