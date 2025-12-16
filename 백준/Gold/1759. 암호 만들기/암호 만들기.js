const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [L, C] = input.shift().split(' ').map(Number);
const originArr = input.shift().split(' ');
const vowels = ['a', 'e', 'i', 'o', 'u'];

originArr.sort();
const ans = [];

const dfs = (idx, str) => {
    if (str.length === L) {
        // 모음 1개 이상 && 자음 2개 이상이어야 통과
        let vowCnt = 0;
        let conCnt = 0;
        for (let i=0; i<str.length; i++) {
            if (vowels.includes(str[i])) vowCnt++;
            else conCnt++;
        }
        if (vowCnt >= 1 && conCnt >= 2) {
            ans.push(str);
            return;
        }
    }
    
    for (let i=idx; i<C; i++) {
        dfs(i+1, str + originArr[i]);
    }
}

dfs(0, '');
console.log(ans.join('\n'));