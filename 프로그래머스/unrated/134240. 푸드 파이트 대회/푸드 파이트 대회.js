function solution(food) {
    
    let list = [];
    for(let i=1; i<food.length; i++) {
        if(food[i]%2==0) {
            let num = food[i] / 2;
        
            for(let j=0; j<num; j++) {
                list.push(i);
            }
        } else {
            let num2 = parseInt(food[i] / 2);
            for(let k=0; k<num2; k++) {
                list.push(i);
            }
        }
    }
    console.log(list);
    
    let zero = [];
    zero.push(0);
    console.log(zero);
    
    const front = JSON.parse(JSON.stringify(list));;
   
    console.log("front:", front);

    const arr = list.reverse();
    console.log(arr);
    let answer = front.concat(zero, arr);
    console.log(answer);
   
    return answer.join('');
    
}