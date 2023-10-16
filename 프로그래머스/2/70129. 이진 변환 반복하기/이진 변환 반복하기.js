function solution(s) {
    var result = [0,0];
    let len  = 0;
    
    while(s.length > 1) {
        len = s.length;
        s = s.split("0").join("");
        console.log(len, s.length);
        result[0]++;
        result[1] += len - s.length;
        s = s.length.toString(2);
    }
   
    
    
    return result;
}


//와우 잊고있었던 사실...
//toString(num) : num으로 진수 변환 가능!!!!!