function solution(keyinput, board) {
    let dir = {
        'up': [0, 1], 
        'down': [0, -1], 
        'left': [-1, 0], 
        'right': [1, 0],
    };
    
    let pos = [0, 0];
    let minW = Math.floor(board[0] / 2);
    let minH = Math.floor(board[1] / 2);
    
    for (let i=0; i<keyinput.length; i++) {
        const cmd = keyinput[i];
        console.log('cmd', cmd);
        if (cmd === 'right' && pos[0] >= minW) continue;
        if (cmd === 'left' && pos[0] <= -1 * minW) continue;
        if (cmd === 'up' && pos[1] >= minH) continue;
        if (cmd === 'down' && pos[1] <= -1 * minH) continue;
        
        pos[0] = dir[cmd][0] + pos[0];
        pos[1] = dir[cmd][1] + pos[1];
        console.log('pos', pos)
    }
    
    return pos;
}