function solution(n) {
    let result = 0;
    let n_len = n.toString(2).split("0").join("").length;
    
    for (let i=n+1; i<n+20; i++) {
        if(n_len==i.toString(2).split("0").join("").length) {
            result = i;
            break;
        }
    }
    
    return result;
}

/*

toString() 사용?
n=78
1) 78의 다음 큰 숫자는 78보다 큰 자연수
2) 다음 큰 숫자와 78은 2진수로 변환했을 때 1의 갯수가 같다 => toString(2)가 같다
result.toString(2).split("0").length == n.toString(2).split('0').length

3) 가장 작은 수여야 한다...
*/