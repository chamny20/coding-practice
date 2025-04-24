const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [s, p] = input.shift().split(' ').map(Number);
const str = input.shift(); // str.length === s
const cntInfo = input.shift().split(' ').map(Number);

const dna = {
    'A': cntInfo[0], 
    'C': cntInfo[1],
    'G': cntInfo[2],  
    'T': cntInfo[3], 
};

let cnt = 0;
const obj = {'A': 0, 'C': 0, 'G': 0, 'T': 0};

for (let i=0; i<p; i++) {
    const st = str[i];
    if (st === 'A' || st === 'C' || st === 'G' || st === 'T') {
        obj[st]++;
    }
}

const checkValid = (obj) => {
    if (
        obj['A'] >= dna['A'] &&
        obj['C'] >= dna['C'] &&
        obj['G'] >= dna['G'] &&
        obj['T'] >= dna['T'] 
       ) {
        return true;
    } else 
        return false;
}

// start
if (checkValid(obj)) cnt++;

for (let i=p; i<s; i++) {
    let prevKey = str[i-p];
    let curKey = str[i];
    if (dna.hasOwnProperty(prevKey)) {
        obj[prevKey]--;
    }
    if (dna.hasOwnProperty(curKey)) {
        obj[curKey]++;
    }
    
    if (checkValid(obj)) cnt++;
}

console.log(cnt);