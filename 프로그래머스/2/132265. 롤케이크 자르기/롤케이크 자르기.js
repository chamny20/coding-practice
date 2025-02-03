function solution(topping) {
    let answer = 0;
    const toppingCounter = new Map();
    
    for (const t of topping) {
        toppingCounter.set(t, (toppingCounter.get(t) || 0) + 1);
    }    
    
    const halfToppingSet = new Set();
    
    for (const t of topping) {
        halfToppingSet.add(t);
        toppingCounter.set(t, toppingCounter.get(t)-1);
        
        if (toppingCounter.get(t) === 0)
            toppingCounter.delete(t);
        
        if (halfToppingSet.size === toppingCounter.size)
            answer++;
    }
    
    return answer;
}