function solution(record) {
    const n = record.length;
    
    const obj = {};
    record.forEach((list) => {
        const [cmd, id, name] = list.split(' ');
        obj[id] = obj[id] || '';
        if (name) {
            obj[id] = name;
        }
    });
    // console.log(obj);
    const logs = [];
    
    for (let i=0; i<n; i++) {
        const [cmd, id, name] = record[i].split(' ');
        const realName = obj[id];
        
        switch (cmd) {
            case 'Enter':
                logs.push(`${realName}님이 들어왔습니다.`);
                break;
            case 'Leave':
                logs.push(`${realName}님이 나갔습니다.`);
                break;
        }
    }
    
    // console.log(logs);
    return logs;
}
