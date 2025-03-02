function solution(diffs, times, limit) {
    let min = 1;
    let max = 100000;
    times.unshift(0);
    
    while (min <= max) {
        let sum = 0;
        let level = Math.floor((min + max) / 2);
        
        for (let i=0; i<diffs.length; i++) {
            const diff = diffs[i];
            // console.log('diff', diff);
            if (diff > level) {
                sum += ((diff - level) * (times[i] + times[i+1]) + times[i+1]);
            } else {
                sum += times[i+1];
            }
        }

        if (sum > limit) {
            min = level + 1;
        } else {
            max = level - 1;
        }
        // console.log(sum)
        // console.log(min, max)
    }

    return min;
}