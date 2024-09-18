function solution(num_str) {
    var ans = 0;
    let num = num_str.split('').map(Number);
    num.map((x) => ans += x);
    return ans;
}