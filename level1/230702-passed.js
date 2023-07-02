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

/* 시간초과 해결을 위해 객체 형태를 만들어 index로 활용하였다.
players의 배열을 바꿔주어도 playerMap 객체의 속성값이 변하지 않아서 두 번째 for문 안에서 객체의 속성을 바꿔주는 작업을 해주었다.
그러니 매번 playerMap의 property가 갱신되어 바뀌게 되었다.
*/
