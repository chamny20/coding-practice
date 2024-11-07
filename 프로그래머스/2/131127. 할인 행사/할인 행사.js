function solution(want, number, discount) {
    var answer = 0;
    let wants = {};
    
    // wants 아이템 object 만들기
    for (let i=0; i<number.length; i++) {
        let item = want[i];
        wants[item] = number[i];
    }
    
    
    for (let i=0; i<discount.length; i++) {
        // console.log('day', i)
        let dayItems = {};
        
        for (let j=i; j<i+10; j++) {
            let discountItem = discount[j];
            // console.log(discountItem)
            dayItems[discountItem] = (dayItems[discountItem] || 0) + 1;
        }
        // check
        // console.log(dayItems)
        // console.log("wants", wants);
        
        let isMatched = true;
        for (let item in wants) {
            if (dayItems[item] !== wants[item]) {
                isMatched = false;
                break;
            }
        }

        if (isMatched) answer++;
    }
    
    return answer;
}