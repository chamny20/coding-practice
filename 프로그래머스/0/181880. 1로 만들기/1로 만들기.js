function solution(num_list) {
    var answer = 0;
    
    num_list.forEach(num => {
        let k = num;
        let cnt = 0;
        while (k > 1) {
            if (k % 2) {
                k = (k - 1) / 2;
            } else
                k /= 2;
            cnt++;
        }
        answer += cnt;
    })
    
    return answer;
}