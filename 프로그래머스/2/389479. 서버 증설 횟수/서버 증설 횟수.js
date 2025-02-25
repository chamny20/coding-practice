function solution(players, m, k) {
    let cnt = 0;
    let servers = [];
    
    for (let i=0; i<players.length; i++) { // i가 time
        const num = players[i];
        // console.log('i', i)
        while (servers[0] === i) {
            servers.shift();
        }
        
        if (Math.floor(num / m) > servers.length) {
            let diff = Math.floor(num / m) - servers.length;
            cnt += diff;
            // console.log('diff', diff);
            // console.log('cnt', cnt);
            while (diff--) {
                servers.push(i+k);
            }
        }
        // console.log(servers);
    }
    
    return cnt;
}