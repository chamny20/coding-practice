function solution(cacheSize, cities) {
    var answer = 0;
    const cacheMemory = [];
    
    for (let city of cities) {
        city = city.toLowerCase();
        
        if (cacheMemory.includes(city)) {
            answer += 1;
            cacheMemory.splice(cacheMemory.indexOf(city), 1);
        } else {
            answer += 5;
        }
        cacheMemory.push(city);
        
        if (cacheMemory.length > cacheSize) {
            cacheMemory.shift();
        }
    }
    
    
    return answer;
}