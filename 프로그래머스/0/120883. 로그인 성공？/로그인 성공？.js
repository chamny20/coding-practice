function solution(id_pw, db) {
    let ans = 'fail';
    
    db.forEach((d) => {
        if (d[0] === id_pw[0]) {
            if (d[1] === id_pw[1]) {
                ans = 'login';
                return;
            } else 
                ans = 'wrong pw';
            return;
        }
    });
    
    return ans;
}