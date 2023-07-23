function solution(nums) {
    let num = Math.floor(nums.length / 2);
    let arr = {};
    nums.forEach((item) => {
        if (!arr[item]) {
            arr[item] = 0; // 값이 없다면 0으로 초기화
        }
        arr[item] += 1;
    })
    console.log(arr);
    let len = Object.keys(arr).length;
    // console.log(Object.keys(arr).length);
    if (len == num) {
        return len;
    } else if( len > num) {
        return num;
    } else if (len < num) {
        return len;
    }
    
}

    

/* 

n마리 폰켓몬 중에 n/2

{ 1 : , 2: , 3: }

*/