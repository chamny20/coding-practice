function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    console.log(participant, completion);
    for (let i=0; i<participant.length; i++) {
        if (participant[i] !== completion[i])
            return participant[i];
    }
    
}

// 첫 번째 시도 - 효율성 테스트 시간 초과로 인한 실패

// function solution(participant, completion) {
//     participant.sort();
    
//     for (let i=0; i<completion.length; i++) {
//         for(let j=0; j<participant.length; j++) {
//             if(completion[i] == participant[j]) {
//                 participant.splice(j, 1);
//                 j--;
//                 break;
//             }
//         }
        
//     }
//     return participant.join("");
// }