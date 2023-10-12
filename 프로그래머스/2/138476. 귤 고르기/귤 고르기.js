function solution(k, tangerine) {
    // tangerine.sort((a,b) => a-b);
    let count = 0;
    let result = 0;
    let tan = {};
    
    tangerine.forEach((idx) => {
        //key가 idx
        tan[idx] = ++tan[idx] || 1;
    })

    let arr = Object.values(tan).sort((a,b) => b-a);
    
    for(let j of arr) {
        if (count < k) {
            count += j;
            result++;
        }
        continue;
    }
    
   
    return result;
}

/*

k개 고르기 => 상자 하나에 담아 판매
서로 다른 종류의 수 최소화

[1,3,2,5,4,5,2,3] => 1 : 1개 / 2 : 2개 / 3 : 2개 / 4 : 1개 / 5 : 2개

크기 개수를 담은 배열을 만들자!

*/