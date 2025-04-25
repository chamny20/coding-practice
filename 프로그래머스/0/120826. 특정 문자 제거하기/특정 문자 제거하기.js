function solution(my_string, letter) {
    let str = '';
    
    my_string.split('').forEach(st => {
        if (st !== letter)
            str += st;
    })
    
    return str;
}