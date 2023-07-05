function solution(survey, choices) {
    var answer = '';
    let table = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3};
    let result = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};

    for (let i=0; i<survey.length; i++) {
        let [type1, type2] = survey[i].split("");
        let num = choices[i];
        if (num === 4) {
            continue;
        }
        else if(num<4) {
            result[type1] += table[num];
        } else if (num>4) {
            result[type2] += table[num];
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
