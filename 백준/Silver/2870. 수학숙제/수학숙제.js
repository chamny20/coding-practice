const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input.shift());

const list = [];

for (let i=0; i<N; i++) {
    const str = input[i];
    let numStr = '';
    
    for (const s of str) {
        if ('0' <= s && s <= '9') {
            numStr += s;
        } else {
            if (numStr !== '') {
                numStr = numStr.replace(/^0+/, '') || '0';
                list.push(numStr);
                numStr = '';
            }
        } 
    }
    if (numStr !== '') {
         numStr = numStr.replace(/^0+/, '') || '0';
         list.push(numStr);
    }
}

list.sort((a, b) => {
    if (a.length === b.length) {
        return a.localeCompare(b);
    }
    return a.length - b.length;
});
console.log(list.join('\n'));