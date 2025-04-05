function solution(want, number, discount) {
    const n = discount.length;
    
    // 정현이가 원하는 거 담기
    const obj = {};
    want.forEach((item, idx) => {
        obj[item] = obj[item] || 0;
        obj[item] = number[idx];
    });
    // console.log("obj", obj);
    
    let ans = 0;
    
    for (let i=0; i<=n-10; i++) {
        const disObj = {};
        let isValid = true;
        
        for (let j=i; j<i+10; j++) {
            const item = discount[j];
            disObj[item] = disObj[item] || 0;
            disObj[item] += 1;
        }
        // console.log(disObj);
        
        // obj랑 비교하기
        for (const key in obj) {
            if (obj[key] !== disObj[key]) {
                isValid = false;
                break;
            } 
        }
        if (isValid) ans++;
        // console.log(ans)
    }   
    
    return ans;
}

/*
바나나 3 사과2 쌀2 돼지2 냄비 1
14일간 할인 제품 날짜 순서 -> 치킨, 사과, 사과, 바나나, 쌀, 사과, 돼지고기, 바나나, 돼지고기, 쌀, 냄비, 바나나, 사과, 바나나


*/