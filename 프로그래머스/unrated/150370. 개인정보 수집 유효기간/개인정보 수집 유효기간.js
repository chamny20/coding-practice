function solution(today, terms, privacies) {
    var answer = [];
    // let date = today.split(".");
    let date = new Date(today);
    console.log(date);
    const termType = {};
    
    terms.forEach((item) => {
        const [type, term] = item.split(" ");
        termType[type] = Number(term);
    });
    console.log(termType);
    
    privacies.forEach((item, idx) => {
        const [pri_date, pri_type] = item.split(" ");
        const chDate = new Date(pri_date);
        console.log(chDate);
        chDate.setMonth(chDate.getMonth() + termType[pri_type]);
        console.log(chDate);
        if (chDate <= date)
            answer.push(idx+1);
    })
    
    console.log(answer);
    
//     for (let j=0; j<privacies.length; j++) {
//         let privacy = privacies[j].split(" ");
//         let pri_date = privacy[0].split(".");
//         let pri_type = privacy[1];
//         console.log(pri_date, pri_type);
        
//         let pri_term = Number(termType[pri_type]);
//         console.log("pri_term:",pri_term);
        
//         if(Number(pri_date[1])+pri_term<12) {
//             let year = Number(pri_date[0]);
//             let month = Number(pri_date[1]) + pri_term;
//             let day = Number(pri_date[2]);
//             console.log(year, month, day);
//         }
//     }
        
    
 
    return answer;
}


