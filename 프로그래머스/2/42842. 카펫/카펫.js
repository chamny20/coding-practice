function solution(brown, yellow) {
    var answer = [];
    // x + y = (brown + 4) / 2
    // xy = brown * yellow
    let total = brown + yellow;
    
    for (let vertical=3; vertical<=Math.sqrt(total); vertical++) {
        if (total % vertical === 0) {
            const width = total / vertical;
            if (brown === (width + (total / width)) * 2 - 4) 
                answer = [width, total/width];
        }
    }
    
    return answer;
}