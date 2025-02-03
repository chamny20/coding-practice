function solution(today, terms, privacies) {
    const todayNum = today.split('.').map(Number);
    const obj = {};
    const result = [];

    terms.forEach(term => {
        const [type, limit] = term.split(' ');
        obj[type] = Number(limit);
    });
    
    for (let i=0; i<privacies.length; i++) {
        const [date, type] = privacies[i].split(' ');
        let [y, m, d] = date.split('.').map(Number);

        if (d === 1) {
            d = 28;
            m -= 1;            
        }
        else
            d -= 1;
        
        if (obj[type] < 12) {
            m = m + obj[type];
            if (m > 12) {
                m -= 12;
                y += 1;
            }
            result.push([y, m, d]);
        } else if (obj[type] >= 12) {
            y += Math.floor(obj[type] / 12);
            m += obj[type] % 12;
            if (m > 12) {
                m -= 12;
                y += 1;
            }
            result.push([y, m, d]);
        }
    }
    
    const answer = [];
    console.log('result', result)
    // result.forEach((el, idx) => {
    //     if (el < todayNum) {
    //         answer.push(idx + 1);
    //     }
    // });
    result.forEach((el, idx) => {
        // 날짜를 정렬 가능한 숫자로 변환하여 비교
        const expiryDate = el[0] * 12 * 28 + el[1] * 28 + el[2];
        const currentDate = todayNum[0] * 12 * 28 + todayNum[1] * 28 + todayNum[2];
        if (expiryDate < currentDate) {
            answer.push(idx + 1);
        }
    });
    
    return answer;
}


