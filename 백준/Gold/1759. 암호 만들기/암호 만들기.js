const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [l, c] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').sort();
const vowels = ['a', 'e', 'i', 'o', 'u']; // 모음
const pwd = [];
const ans = [];
const visited = Array(c).fill(false);

const dfs = (idx, str) => {
 
    if (str.length === l) {
        let vowCnt = 0;
        let conCnt = 0;
        for (let i=0; i<str.length; i++) {
            if (str.includes(vowels[i])) {
                vowCnt++;
            } else 
                conCnt++;
        }
        if (vowCnt >=1 && conCnt >=2) {
            ans.push(str);
        }
        return;
    }
    
    for (let i=idx; i<arr.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i+1, str+arr[i]);
            visited[i] = false;
        }
    }
}

dfs(0, '');
console.log(ans.join('\n'));