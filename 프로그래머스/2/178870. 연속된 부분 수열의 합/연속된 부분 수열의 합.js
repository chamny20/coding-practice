function solution(sequence, k) {
    let left = 0;  // 왼쪽 포인터
    let sum = 0;  // 부분 수열의 합
    let result = []; // 최종 반환값
    let minLength = Infinity;
    
    // 오른쪽 포인터를 왼쪽에서 오른쪽으로 이동시키며 부분 수열 탐색
    for (let right = 0; right < sequence.length; right++) {
        sum += sequence[right];  // 오른쪽 포인터에 해당하는 값 추가
        
        // 합이 k보다 커지면, 왼쪽 포인터를 이동하여 합을 줄임
        while (sum > k && left <= right) {
            sum -= sequence[left];
            left++;
        }

        // 합이 k일 때, 부분 수열을 answer에 추가
        if (sum === k) {
            const curLength = right - left + 1;
            
            if (curLength < minLength) {
                minLength = curLength;
                result = [left, right];
            }
        }
    }
    

    return result;
}
