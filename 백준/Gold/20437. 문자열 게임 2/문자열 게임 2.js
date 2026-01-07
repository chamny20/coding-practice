const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const t = Number(input.shift());

for (let i=0; i<t; i++) {
    const w = input.shift();
    const k = Number(input.shift());
    const words = [];
    
    const map = new Map();
    
    for (let j=0; j<w.length; j++) {
        if (!map.has(w[j])) {
            map.set(w[j], [1, j]);
        } else {
            const arr = [...map.get(w[j]), j];
            arr[0]++;
            map.set(w[j], arr);
        }
        
    }
    
    map.forEach((val, key, _) => {
        if (val[0] >= k) {
            for (let t=val.length-1; t>=k; t--) {
                const len = val[t] - val[t-k+1] + 1;
                words.push(len);
            }
        }
    });
    
    if (words.length === 0) {
        console.log(-1);
    } else {
        words.sort((a, b) => a - b);
        console.log(words[0] + ' ' + words[words.length - 1]);
    }

}