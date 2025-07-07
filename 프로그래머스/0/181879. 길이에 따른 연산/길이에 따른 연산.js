function solution(num_list) {
    const sum = num_list.reduce((acc, num) => acc += num);
    const multiple = num_list.reduce((acc, num) => acc *= num);
    
    return num_list.length >= 11 ? sum : multiple;
}