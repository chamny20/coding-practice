function solution(people, limit) {
    let ans = 0;
    
    people.sort((a, b) => a - b);
    
    while (people.length > 0) {
        if (people[0] + people.at(-1) <= limit) {
            people.shift();
            people.pop();
            ans++;
        } else {
            people.pop();
            ans++;
        }
        
    }
    
    return ans;
}