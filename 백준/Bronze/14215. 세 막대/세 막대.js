let [a, b, c] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let arr = [a, b, c].sort((x, y) => y - x);

if (arr[1] + arr[2] <= arr[0]) {
        arr[0] = arr[1] + arr[2] - 1;
        console.log(arr[0] + arr[1] + arr[2]);
} else {
    console.log(arr[0] + arr[1] + arr[2]);
}





