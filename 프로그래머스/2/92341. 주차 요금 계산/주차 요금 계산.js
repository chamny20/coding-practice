function solution(fees, records) {
    var answer = [];
    const [defaultTime, defaultFee, perTime, perFee] = fees;
    
    const convertTime = (strT) => {
        const [h, m] = strT.split(':').map(Number);
        return h * 60 + m;
    }
    const obj = {};
    const objLen = {};
    for (let i=0; i<records.length; i++) {
        const [strTime, carNum, state] = records[i].split(' ');
        const convertedTime = convertTime(strTime);
        // console.log(convertedTime);
        if (!obj[carNum]) {
            obj[carNum] = [];
            objLen[carNum] = 0;
        }
        if (state === 'IN') {
            obj[carNum].push(convertedTime);
            objLen[carNum]++;
        } else {
            let diff = convertedTime - obj[carNum].pop();
            obj[carNum].push(diff);
            objLen[carNum]++;
        }
        // console.log(obj)
    }
    
    const oddKeys = Object.entries(objLen).filter(([key, value]) => value % 2 !== 0).map(([key]) => key);
    
    for (let i=0; i<oddKeys.length; i++) {
        const num = oddKeys[i];
        let diff = (23 * 60 + 59) - obj[num].pop();
        obj[num].push(diff);
    }
    // console.log("obj", obj)
    const ord = Object.keys(obj).sort();
    
    ord.forEach(num => {
        let sum = 0;
        for (let i=0; i<obj[num].length; i++) {
            sum += obj[num][i];
        }
        // console.log(sum, 'sum')
        if (sum <= defaultTime) 
            answer.push(defaultFee);
        else
            answer.push(Math.ceil((sum-defaultTime) / perTime) * perFee + defaultFee);
    })

    console.log(answer)
  
    return answer;
}