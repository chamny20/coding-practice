function solution(numbers) {
    var answer = [];
    
    for (let i=0; i<numbers.length; i++) {
        const str = numbers[i].toString(2).padStart(4, '0');
        // console.log(str);
        let num;
        if (str[str.length - 1] === '0') {
            num = str.substring(0, str.length - 1) + '1';
        } else {
            const idx = str.lastIndexOf('01');
            num = str.substring(0, idx) + '10' + str.substring(idx+2, str.length);
        }
        answer.push(parseInt(num, 2));
    }
    
    return answer;
}