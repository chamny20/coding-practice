function solution(record) {
    var answer = [];
    let data = {};
    
    for (let i=0; i<record.length; i++) {
        const [cmd, id, nickname] = record[i].split(" ");
        switch (cmd) {
            case 'Enter':
                data[id] = nickname;
                break;
            case 'Leave':
                // delete data[id];
                break;
            case 'Change':
                data[id] = nickname;
                break;
        }
    }
    
    for (let i=0; i<record.length; i++) {
        const [cmd, id, nickname] = record[i].split(" ");
        switch (cmd) {
            case 'Enter':
                answer.push(`${data[id]}님이 들어왔습니다.`);
                break;
            case 'Leave':
                answer.push(`${data[id]}님이 나갔습니다.`);
                break;
            case 'Change':
                break;
        }
    }
    
    
    return answer;
}