function solution(myString, pat) {
    var answer = 0;
    const newStr = [];
    
    for (let i=0; i<myString.length; i++) {
        if (myString[i] === 'A')
            newStr.push('B');
        else
            newStr.push('A');
    }
    console.log(newStr);
    
    if (newStr.join('').includes(pat))
        answer++;
    
    return answer;
}