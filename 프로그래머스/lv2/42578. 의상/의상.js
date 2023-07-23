function solution(clothes) {
    var answer = 1;
    let arr = {};
    
    clothes.forEach((item) => {
        console.log("item:", item);
        if (!arr[item[1]])
            arr[item[1]] = 0;
        
        arr[item[1]] += 1;
    })
    console.log(arr);

    let sum = Object.values(arr);
    
    for (let key in arr) {
        console.log(arr[key]);
        answer *= arr[key] + 1;
    }
    
    // for (let value of sum) {
    //     answer += value;
    // }
    // console.log("answer:",answer);
    // console.log(sum);
    // if(sum.length > 1) {
    //     for (let i=0; i<sum.length; i++) {
    //     answer *= sum[i]
    //     console.log(answer);
    //     //(A,B,C일때) => (A+1)(B+1)(C+1)
    //     }
    //     answer--;
    // } 
    
    
    return answer-1;
}

/*

종류별 1가지 의상만 착용 가능
해시 객체 이용해서... 조합 맞추기

*/