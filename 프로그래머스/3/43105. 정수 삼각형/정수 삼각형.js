function solution(triangle) {
    var answer = 0;
    
    for (let i=1; i<triangle.length; i++) {
        const arr = triangle[i];
        for (let j=0; j<arr.length; j++) {
            if (j === 0) 
                triangle[i][j] += triangle[i-1][j];
            else if (j === arr.length - 1)
                triangle[i][j] += triangle[i-1][j-1];
            else
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j]);
        }
    }
    
    answer = Math.max(...triangle.map(subArr => Math.max(...subArr)));

    return answer;
}