function solution(elements) {
    let sumSet = new Set();
    let n = elements.length;
    
    for (let i=1; i<=n; i++) {
        let sum = 0;
        
        for (let j=0; j<n; j++) {
            if (j === 0) {
                for (let k=0; k<i; k++) {
                    sum += elements[k];
                }
            } else {
                sum -= elements[j-1];
                sum += elements[(j+i-1) % n];
            }
            sumSet.add(sum);
        }
    }
    
    return sumSet.size;
}