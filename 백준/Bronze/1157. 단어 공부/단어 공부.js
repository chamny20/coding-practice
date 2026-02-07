const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const s = input[0].toLowerCase();

const map = new Map();
for (let i=97; i<=122; i++) {
    map.set(i, 0);
}

for (let i=0; i<s.length; i++) {
    const num = s[i].charCodeAt();
    map.set(num, map.get(num) + 1);
}


const arr = [...map.entries()];
let ansList = arr.sort((a, b) => b[1] - a[1]);
const maxVal = arr[0][1]; 
ansList = ansList.filter(([k, v]) => maxVal === v);

if (ansList.length > 1) console.log('?');
else {
    const [k, v] = ansList[0];
    console.log(String.fromCharCode(k).toUpperCase());
}