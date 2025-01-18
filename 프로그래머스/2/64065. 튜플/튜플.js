function solution(s) {
    var answer = [];
    let arr = [];
    
    const str = s.slice(2, -2).split(`},{`);
    for (let i=0; i<str.length; i++) {
        arr.push(str[i].split(',').map(Number));
    }
    arr.sort((a, b) => a.length - b.length);
    
    for (let i=0; i<arr.length; i++) {
        const list = arr[i];
        list.forEach((num) => {
            if (!answer.includes(num)) {
                answer.push(num);
            }
        })
    }
   
    return answer;
}