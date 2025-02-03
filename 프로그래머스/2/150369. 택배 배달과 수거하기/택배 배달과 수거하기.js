function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    let point = n - 1;
    
    for (let i=point; i>=0; i--) {
        
        while (deliveries[i] || pickups[i]) {
            answer += (i+1) * 2;
            let sum = cap;
            
            for (let j=i; j>=0; j--) {
                if (deliveries[j]) {
                    if (deliveries[j] >= sum) {
                        deliveries[j] -= sum;
                        break;
                    } else {
                        sum -= deliveries[j];
                        deliveries[j] = 0;
                    }
                }
                // console.log('here', deliveries)
            }
            
            sum = cap;
            
            for (let j=i; j>=0; j--) {
                if (pickups[j]) {
                    if (pickups[j] >= sum) {
                        pickups[j] -= sum;
                        break;
                    } else {
                        sum -= pickups[j];
                        pickups[j] = 0;
                    }
                }
                // console.log('pickups', pickups)
            }
            // console.log('answer', answer)
        }
    }
    
    
    return answer;
}