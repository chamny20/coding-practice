function solution(bandage, health, attacks) {
    let nowHealth = health;
    const [stackCnt, secPlus, y] = bandage;
    
    // 몬스터의 모든 공격이 끝날 때까지 반복해야 한다.
    let time = 0;
    let sequenceCnt = 0;
    
    while (attacks.length) {
        console.log('time:', time);
        
        // attacks[0][0]이 time이면 꺼내서 계산해주기
        if (attacks[0][0] === time) {
            const [_, damage] = attacks.shift();
            nowHealth -= damage;
            sequenceCnt = 0;
        } else {
            if (nowHealth < health) {
                if (nowHealth + secPlus <= health)
                    nowHealth += secPlus;
                else 
                    nowHealth = health;
            }
            sequenceCnt++;
        }
        if (time !==0 && sequenceCnt === stackCnt) {
            sequenceCnt = 0;
            if (nowHealth + y <= health)
                nowHealth += y;
            else 
                nowHealth = health;
        }
        time++;
        if (nowHealth <= 0) break;
        console.log('sequenceCnt', sequenceCnt);
        console.log("nowHealth", nowHealth);
    }
    
    return nowHealth > 0 ? nowHealth : -1;
}

