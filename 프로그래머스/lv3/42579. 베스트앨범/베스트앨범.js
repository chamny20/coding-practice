function solution(genres, plays) {
    var answer = [];
    
    let type = {};
    let genre = [...new Set(genres)];
    console.log(genre);
    
    let countArr = {};
     genres.forEach((item, index) => {
        countArr[item] = 0;
    })
    
    genres.forEach((item, index) => {
        countArr[item] += Number(plays[index]);
        console.log(countArr);
    })
    
    genres.forEach((item, idx) => {
        type[idx] = item;
    })
    
    console.log(type);
    
    let sortedGenres = Object.keys(countArr).sort((a,b) => countArr[b]-countArr[a]);
    console.log("here:",sortedGenres);
    
    sortedGenres.forEach((genre, idx) => {
        let indexArr = [];
        for (let i=0; i<genres.length; i++) {
            if (genres[i] == genre) {
                indexArr.push(i);
            }
        }
        indexArr.sort((a,b) => plays[b]-plays[a]);
        console.log("indexArr:",indexArr);
        
        answer.push(indexArr[0]);
        if(indexArr.length>1) {
            answer.push(indexArr[1]);
        }
      
    })
    
    
    return answer;
}

/*

장르별 총 재생횟수를 먼저 비교
classic count += plays[idx]

*/