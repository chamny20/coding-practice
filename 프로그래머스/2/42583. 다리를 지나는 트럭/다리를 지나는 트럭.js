function solution(bridge_length, weight, truck_weights) {
    let ans = 0;
    let bridge = Array.from({length: bridge_length}, () => 0);
    let bridge_sum = 0;
    
    ans++;
    bridge.shift();
    bridge_sum += truck_weights[0];
    bridge.push(truck_weights.shift());
    // console.log("bridge:", bridge);
    // console.log("bridge_sum:", bridge_sum);
    
    while (bridge_sum > 0) {
        ans++;
        
        bridge_sum -= bridge.shift();
        // console.log("bridge_sum:", bridge_sum);
        
        if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
            bridge_sum += truck_weights[0];
            // console.log("bridge_sum:", bridge_sum);
            
            bridge.push(truck_weights.shift());
            // console.log("bridge:", bridge);
        } else {
            bridge.push(0);
            // console.log("bridge:", bridge);
        }
    }
    
    return ans;
}