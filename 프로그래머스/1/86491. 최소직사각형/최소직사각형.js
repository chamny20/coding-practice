function solution(sizes) {
    sizes.forEach(list => list.sort((a, b) => a - b));
    console.log(sizes);
    
    let min = sizes[0][0];
    let max = sizes[0][1];
    
    for (let i=1; i<sizes.length; i++) {
        const [a, b] = sizes[i];
        
        if (max < b) {
            max = b;
        }
        
        if (min < a) {
            min = a;
        }
    }
    
    return min * max;
}