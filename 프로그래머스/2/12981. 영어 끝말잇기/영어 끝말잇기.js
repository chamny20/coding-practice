function solution(n, words) {
    var answer = [0,0];
    let turn = 1;
    let prev = words[0];
    
    for(let i=1; i<words.length; i++) {
        let player = i % n + 1;

        //끝글자 체크
        if(prev.slice(-1)!==words[i][0]) {
            return [player, turn];
        }
        
        //중복 체크
        if(words.findIndex(word => word == words[i])!==i) {
            return [player, turn];
        }
            
            
        if(player==n)
            turn += 1;
    
        prev = words[i];
    }

    
    return answer;
}

/*
2차원배열느낌?

words.length만큼 돌아서 중복있거나 잘못말하거나..
중복체크 => find?
끝글자 뽑기 => slice(-1)
*/