function solution(wallpaper) {
    var answer = [0,0,0,0];
    let x = [];
    let y = [];
    
    
    for (let i=0; i<wallpaper.length; i++) {
       for (let j=0; j<wallpaper[i].length; j++) {
           if (wallpaper[i][j]=='#') {
               x.push(i);
               y.push(j);
           }
       }
    }
    console.log(x);
    console.log(y);
    
    
    answer[0] = Math.min(...x);
    answer[1] = Math.min(...y);
    answer[2] = Math.max(...x)+1;
    answer[3] = Math.max(...y) +1;
    
    return answer;
}

/*
[a, b, c, d]
d는 #이 가장 가로로 큰 숫자
c는 wallpaper.length가 됨
a는 가장 처음 #가 들어있는 번째 - 1
b는 가로로 가장 왼쪽에 있는 #이 됨  -> 가장 작은 4위치에 #이 있음
*/