function solution(players, callings) {
    
    for (let i=0; i<callings.length; i++) {
        let idx = players.indexOf(callings[i]);

        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
        
    }
    
    return players;
}

/* 시간초과로 실패
indexOf() 메서드는 배열에서 특정 요소의 인덱스를 찾는 데 사용됩니다. 
이 메서드는 배열을 처음부터 끝까지 순회하면서 찾고자 하는 요소를 찾을 때까지 검색합니다.
따라서 배열의 크기가 클수록 indexOf() 메서드의 성능은 저하됩니다.주어진 코드에서는 callings 배열의 각 요소를 players 배열에서 찾아서 위치를 변경하는 작업을 수행합니다. 
하지만 players.indexOf(callings[i]) 구문은 매 호출마다 배열을 순회하면서 요소를 찾기 때문에 시간 복잡도가 O(n)이 됩니다. 
이 작업을 callings 배열의 크기인 callings.length만큼 반복하므로 총 시간 복잡도는 O(n^2)가 됩니다. 
따라서 배열의 크기가 커질수록 성능 저하가 발생하고, 시간 초과 오류가 발생할 수 있습니다.
*/
