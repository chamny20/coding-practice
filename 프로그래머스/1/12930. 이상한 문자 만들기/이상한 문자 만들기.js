function solution(s) {
    var answer = '';
    var strArray = s.split(" ");
    
    for(let j=0; j<strArray.length; j++) {
        for(let i=0; i<strArray[j].length; i++) {
            if(i%2==0)
                answer = answer + strArray[j][i].toUpperCase();
            else
                answer = answer + strArray[j][i].toLowerCase();
            
        }
        if(j<strArray.length -1) {
            answer = answer + " ";
        }
    }
    
    
    return answer;
}