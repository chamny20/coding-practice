function solution(age) {
    // a = 0, b = 1, c = 2, ... (a:97, b:98, c:99, d:100)
    // age = 23
    // 2 -> c
    // 99 - 97 = 2
    // 3 -> d
    let answer = '';
    
    const str = age.toString().split('').map(Number);
    console.log(str)
    str.forEach(num => {
        answer += String.fromCharCode(num + 97)
    })
    
    
    return answer;
}