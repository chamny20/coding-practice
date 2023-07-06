function solution(players, callings) {
    let playerMap = {};
    
    for (let i=0; i<players.length; i++) {
        playerMap[players[i]] = i;
    }
    
    for (let j=0; j<callings.length; j++) {
        let idx = playerMap[callings[j]];
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
        [playerMap[players[idx]], playerMap[players[idx - 1]]] = [playerMap[players[idx - 1]], playerMap[players[idx]]];
   
    }
    
    return players;
}