function solution(s) {
    var answer = '';
    
    let text = s.split(" ");
    console.log(text);
    
    let text2 = text.map((str) => 
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    )
    console.log(text2);
    answer = text2.join(" ");
    
    return answer;
}