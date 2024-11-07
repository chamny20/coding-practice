function solution(participant, completion) {
    let result = '';
    
    participant.sort();
    completion.sort();
    console.log(participant, completion)
    for (let i=0; i<participant.length; i++) {
        if (completion[i] !== participant[i]) {
            result = participant[i];
            break;
        }
    }
    
    return result;
}

