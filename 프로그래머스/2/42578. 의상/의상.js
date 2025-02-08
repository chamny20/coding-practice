function solution(clothes) {
    var answer = 1;
    let arr = {};
    
    clothes.forEach((item) => {
        console.log("item:", item);
        if (!arr[item[1]])
            arr[item[1]] = 0;
        
        arr[item[1]] += 1;
    })
    // console.log(arr);

    for (let key in arr) {
        // console.log(arr[key]);
        //A,B,C일 경우 => (A+1)(B+1)(C+1)
        answer *= arr[key] + 1;
    }
    
    return answer-1;
}

/*

종류별 1가지 의상만 착용 가능
해시 객체 이용해서... 조합 맞추기

*/