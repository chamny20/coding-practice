function solution(sizes) {
    sizes.forEach((size) => {
        size.sort((a, b) => a - b);
    });
    console.log(sizes);
    
    let maxW = sizes[0][0];
    let maxH = sizes[0][1];
    
    sizes.forEach((size) => {
        const [a, b] = size;
        
        maxW = Math.max(maxW, a);
        maxH = Math.max(maxH, b);
    });
    
    return maxW * maxH;
}