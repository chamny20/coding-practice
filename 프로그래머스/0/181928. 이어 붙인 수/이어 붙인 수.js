function solution(num_list) {
    var answer = 0;
    let odd = [];
    let even = [];
    
    for (let i=0; i<num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even = even.concat(num_list[i]);
        } else {
            odd = odd.concat(num_list[i]);
        }
    }
  
    
    return Number(odd.join('')) + Number(even.join(''));
}