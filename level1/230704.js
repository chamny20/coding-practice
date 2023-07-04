//incomplete

function solution(today, terms, privacies) {
    var answer = [];
    let date = today.split(".");
    console.log(date);
    for (let i=0; i<terms.length; i++) {
        let term = terms[i].split(" ");
        let type = term[0];
        let period = term[1];
        console.log(type, period);
        
        for (let j=0; j<privacies.length; j++) {
            let privacy = privacies[j].split(" ");
            let pri_date = privacy[0].split(".");
            let pri_type = privacy[1];
            console.log(pri_date, pri_type);
        }
        
    }
 
    return answer;
}



