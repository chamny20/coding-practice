let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

if (min < 45) {
    min = 60 + min - 45;
    hour -= 1;
} else {
    min = min - 45;
}

if (hour < 0) {
    hour = 23;  // 0시에서 -1시간이 되면 23시로 가야 함
}

console.log(hour + " " + min);