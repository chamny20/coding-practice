function solution(ingredient) {
    var answer = 0;
    let arr = [];
    
    for (let i=0; i<ingredient.length; i++) {
        arr.push(ingredient[i]);
        // console.log("arr:", arr);
        // console.log(arr.slice(-4));
        if (arr.slice(-4).join("") === '1231') {
            
            arr.splice(-4);
            // console.log("for - arr:", arr);
            answer++;
        }
        
    }
    
    return answer;
}

/* memo
빵: 1
야채 : 2
고기 : 3

순서 : 빵 - 야채 - 고기 - 빵

야채 빵 //빵 야채 고기 빵 /// 야채 고기 빵
2 1    // 1 2 3 1 // 2 3 1
순서는 1231 이 되어야 함

*/