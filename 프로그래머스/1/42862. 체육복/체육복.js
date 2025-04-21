function solution(n, lost, reserve) {    
    const arr = Array(n).fill(1);
    lost.forEach((num, idx) => {
        arr[num-1] = 0;
    });
    reserve.forEach((num, idx) => {
        arr[num-1]++;
    });
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            if (i>0 && arr[i-1] > 1) {
                arr[i] = 1;
                arr[i-1]--;
            } else if (i<n && arr[i+1] > 1) {
                arr[i] = 1;
                arr[i+1]--;
            }
        }
        
    }
    return arr.filter(num => num > 0).length;
}