let [a, b, c, d, e, f] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

// a * x + b * y = c
// d * x + e * y = f

for (x=-999; x<1000; x++) {
    for(y=-999; y<1000; y++) {
        if ((a*x + b*y == c) && (d*x + e*y == f))
            console.log(`${x} ${y}`);
    }
}
