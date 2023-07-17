function solution(keymap, targets) {
    const answer = new Array(targets.length).fill(-1);
    
    for(let i=0; i<targets.length; i++) {
        let target = targets[i];
        // console.log(target);
        let count=0;
        for(let j=0; j<target.length; j++) {
            let str = target[j];
            // console.log("keymap:", keymap);
            let min = Math.min(...keymap.map(x => {
                const idx = x.indexOf(str);
                // console.log("here:", x.indexOf(str));
                // 둘 중에 작은 것을 선택해야 함
                return idx === -1 ? Infinity : idx + 1;
            }));
            if(min === Infinity) {
                count = -1;
                break;
            }
            count += min;
            // console.log("count:", count);

    }
        answer[i] = count;
}
    return answer;
}
