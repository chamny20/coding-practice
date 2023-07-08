function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++) {
        if(s[i]==" ")
            answer += " ";
        else {
            let c = s.charCodeAt(i);
            if(c<=90){
                c += n;
                if(c > 90)
                    c -= 26;
            }
            else {
                c += n;
                if(c >122)
                    c -= 26;
            }
            answer += String.fromCharCode(c);
            
        }
    }
    
    return answer;
}