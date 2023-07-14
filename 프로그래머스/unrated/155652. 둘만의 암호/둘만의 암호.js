function solution(s, skip, index) {
    // 1) filter 함수를 사용하여 skip문자를 제거 배열을 반환 받는다.
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const arr = alphabet.filter((a) => !skip.includes(a));
    console.log(arr.length);
    
    // 2) map 함수를 사용하여  (현재 알파벳) + index에 위차한 값을 반환한다. 
    return s.split('').map((a) => arr[(arr.indexOf(a)+index) % arr.length]).join('');
}