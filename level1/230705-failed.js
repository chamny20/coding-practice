function solution(survey, choices) {
    var answer = '';
    console.log(survey, choices);
    let table = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3};
    console.log(table);
    let result = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};

    for (let i=0; i<survey.length; i++) {
        let [type1, type2] = survey[i].split("");
        console.log(type1, type2);
        let num = choices[i];
        if(num<4) {
            result[type1] = table[num];
        } else if (num>4) {
            result[type2] = table[num];
        }
        
    }
    console.log(result);
    
    if (result['R']>=result['T']) 
        answer += 'R';
    else
        answer += 'T';
    
    if (result['C']>=result['F']) 
        answer += 'C';
    else
        answer += 'F';
    
    if (result['J']>=result['M']) 
        answer += 'J';
    else
        answer += 'M';
    
    if (result['A']>=result['N']) 
        answer += 'A';
    else
        answer += 'N';
    
    return answer;
}


//시간초과...
/*
테스트 1 〉	통과 (4.35ms, 33.6MB)
테스트 2 〉	통과 (4.22ms, 33.7MB)
테스트 3 〉	통과 (3.98ms, 33.7MB)
테스트 4 〉	통과 (5.86ms, 33.7MB)
테스트 5 〉	통과 (5.56ms, 33.6MB)
테스트 6 〉	통과 (5.40ms, 33.7MB)
테스트 7 〉	실패 (5.92ms, 33.7MB)
테스트 8 〉	실패 (5.65ms, 33.8MB)
테스트 9 〉	실패 (8.46ms, 33.8MB)
테스트 10 〉	실패 (8.59ms, 33.9MB)
테스트 11 〉	실패 (6.28ms, 33.8MB)
테스트 12 〉	실패 (8.83ms, 34MB)
테스트 13 〉	실패 (9.18ms, 34.3MB)
테스트 14 〉	실패 (18.52ms, 34.5MB)
테스트 15 〉	실패 (12.25ms, 34.7MB)
테스트 16 〉	실패 (16.34ms, 34.6MB)
테스트 17 〉	실패 (17.66ms, 34.7MB)
테스트 18 〉	통과 (17.08ms, 34.7MB)
테스트 19 〉	실패 (17.74ms, 34.6MB)
테스트 20 〉	실패 (13.76ms, 34.6MB)
*/

/*시간초과 나타나는 이유 :
result[type1] = table[num];
->이 부분에서 +=가 아닌 =만 사용하였기 때문
*/
