function solution(n, w, num) {
    var answer = 1;
    const floorCnt = Math.ceil(n / w);
    const targetFloor = Math.ceil(num / w);
    
    console.log(floorCnt, targetFloor)
    const rest = floorCnt * w - n;
    const nRemain = n % w || n;
    const numRemain = num % w || num;
    console.log(nRemain, numRemain);
    
    // 같은 방향인지, 반대 방향인지 확인 후 
    // 타겟의 위에 상자가 있는지 체크하는 코드를 통해 위에 없는 경우 -1
    if (floorCnt % 2 === targetFloor % 2 && nRemain < numRemain) {
        answer -= 1 ;
        // console.log('ans', answer);
    }
    if (floorCnt % 2 !== targetFloor % 2 && nRemain + numRemain <= w) {
        answer -= 1 ;
        // console.log('ans', answer);
    }
    
    return floorCnt - targetFloor + answer;
}