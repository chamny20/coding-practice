function solution(my_string, indices) {
    var answer = '';
    let arr = my_string.split('');
    
    for (let i=0; i<indices.length; i++) {
        const idx = indices[i];
        arr[idx] = '';
    }

    answer = arr.join('');
    
    return answer;
}