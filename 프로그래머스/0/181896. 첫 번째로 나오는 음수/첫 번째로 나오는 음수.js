function solution(num_list) {
    let num = num_list.filter(a => a < 0);
    return num_list.indexOf(num[0]);
}