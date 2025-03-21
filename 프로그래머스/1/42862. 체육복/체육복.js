function solution(n, lost, reserve) {
    const arr = Array.from(Array(n), (_, idx) => idx + 1);
    console.log(arr);
    reserve.sort((a, b) => a-b);
    
    // lost
    lost.forEach(num => {
        if (reserve.includes(num)) {
            reserve.splice(reserve.indexOf(num), 1);
        } else {
            arr[num - 1] = 0;
        }
    });
    
    for (let i=0; i<reserve.length; i++) {
        const num = reserve[i];
        // console.log('num', num)
        // console.log(arr[num-2])
        
        if (num > 1 && arr[num - 2] === 0) 
            arr[num - 2] = num;
        else if (num < n && arr[num] === 0) 
            arr[num] = num;
    }
    
    return arr.filter(n => n !== 0).length;
}