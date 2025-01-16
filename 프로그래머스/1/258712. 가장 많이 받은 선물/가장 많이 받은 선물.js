function solution(friends, gifts) {
    var answer = 0;
    let board = {};
    let giftNum = {};
    let result = {};
    
    friends.forEach((friend) => {
        board[friend] = {}; // 각 친구별로 선물 보낸 내역
        friends.forEach((fr) => {
            board[friend][fr] = 0;
        })
        
        giftNum[friend] = 0; // 각 친구가 받은 선물의 수
        result[friend] = 0; // 최종 결과
    });
    
    
    for (let i=0; i<gifts.length; i++) {
        const [a, b] = gifts[i].split(' ');
        
        giftNum[a] += 1;
        giftNum[b] -= 1;
        
        board[a][b] += 1;
        
    }
    console.log(board);
    
    // 선물 비교
    for (let i=0; i<friends.length; i++) {
        const friend = friends[i];
        const givenTo = Object.keys(board[friend]); // friend가 선물 준 사람들
        
        for (let j=i+1; j<friends.length; j++) {
            const recipient = givenTo[j]; // 선물을 받은 사람
            const givenCount = board[friend][recipient]; // friend가 recipient에게 준 선물 개수
            const receivedCount = board[recipient]?.[friend] || 0; // recipient가 friend에게 준 선물 개수
            // console.log(recipient, givenCount, receivedCount);
            
            if (givenCount > receivedCount) {
                result[friend] += 1;
            } else if (givenCount < receivedCount) {
                result[recipient] += 1;
            } else {
                if (giftNum[friend] > giftNum[recipient]) result[friend]++;
                if (giftNum[friend] < giftNum[recipient]) result[recipient]++;
            }
            // console.log(result);
                    
        }
        
        
    }
    answer = Math.max(...Object.values(result));
    return answer;
}