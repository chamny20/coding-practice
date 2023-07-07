process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //입력받은 숫자를 data에 넣기
    const n = data.split(" "); //data를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]); //a:한줄당 별의 개수, b: 줄의 개수
    for(let i=0; i<b; i++) { //b만큼 반복(줄수만큼)
      let str = "";
      for(let j=0; j<a; j++) { //한 줄에 별을 몇 개 찍을지 반복
        str = str + "*"; //str 변수에 별 담기
      } 
      console.log(str); //한 줄에 담긴 별 a개 출력
    }
});