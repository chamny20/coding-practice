function solution(n, m, section) {
    var answer = 0;
    let part = 0;
    section.forEach((item) => {
        if (item > part) {
      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      part = item + m - 1;
      // 페인트를 칠했으니 1증가 시킨다.
      answer++;
    }})
    
    return answer;
}

//if문 부분을 생각하기 어려웠다.
