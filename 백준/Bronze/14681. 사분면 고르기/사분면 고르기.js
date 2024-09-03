const input = require('fs').readFileSync(0).toString().trim().split("\n");

let a = Number(input[0]);
let b = Number(input[1]);

if (a>0 && b>0) console.log(1);
else if (a>0 && b<0) console.log(4);
else if (a<0 && b>0) console.log(2);
else if (a<0 && b<0) console.log(3);