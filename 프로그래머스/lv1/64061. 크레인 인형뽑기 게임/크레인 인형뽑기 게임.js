function solution(board, moves) {
    let basket = [];
    let answer = 0;
    
    for(let i=0; i<moves.length; i++) {
        let order = moves[i] - 1;
        for(let j=0; j<board.length; j++) {
            if(board[j][order]===0)
                continue;
            else {
                const lastLength = basket.length <= 1 ? 0 : basket.length-1;
                if(basket[lastLength]===board[j][order]) {
                    board[j][order] = 0;
                    basket.splice(lastLength);
                    answer+=2;
                }
                else {
                    basket.push(board[j][order]);
                    board[j][order]=0;
                }
                break;
                
            }
        }
    }
    return answer;
}