let input = require('fs').readFileSync('/dev/stdin').toString().split('');
let time = 0;
let num = {
	3: "ABC",
	4: "DEF",
	5: "GHI",
	6: "JKL",
	7: "MNO",
	8: "PQRS",
	9: "TUV",
	10: "WXYZ",
};

for (let i=0; i<input.length; i++) {
    for (let j=3; j<=10; j++) {
       if (num[j].includes(input[i]))
           time += j;
    }
}

console.log(time);