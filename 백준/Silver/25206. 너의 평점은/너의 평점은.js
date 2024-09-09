const input = require("fs").readFileSync(0).toString().trim().split("\n");

const score = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0,
}

let creditSum = 0;
let projectSum = 0;

for (let i=0; i<20; i++) {
    let credit = parseFloat(input[i].split(' ')[1]);
    let grade = input[i].split(' ')[2];
    if (score[grade] !== undefined) {
        creditSum += credit;
        projectSum += credit * score[grade];
    }
}

console.log(projectSum / creditSum);