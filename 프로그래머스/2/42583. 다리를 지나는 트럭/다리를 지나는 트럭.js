function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = Array(bridge_length).fill(0);
    let bridgeSum = 0;
    
    while (truck_weights.length > 0 || bridgeSum > 0) {
        bridgeSum -= bridge.shift();
        
        if (truck_weights.length > 0 && bridgeSum + truck_weights[0] <= weight) {
            const item = truck_weights.shift();
            bridge.push(item);
            bridgeSum += item;
        } else {
            bridge.push(0);
        }
        
        time++;
        // console.log(bridge);
        // console.log('time', time)
    }
    return time;
}