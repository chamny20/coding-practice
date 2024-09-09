const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));

// 1부터 N-1까지
for (let i=1; i<n; i++) {
    let blank = ' '.repeat(n-i);
    let stars = '*'.repeat(i+i-1);
    console.log(blank + stars);
}

for (let j=n; j>=1; j--) {
    let blank = ' '.repeat(n-j);
    let stars = '*'.repeat(j+j-1);
    console.log(blank + stars);
}