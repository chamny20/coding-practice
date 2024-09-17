const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const cards = input[1].split(" ").map(Number);
let cardMap = new Map();

for (let i=0; i<cards.length; i++) {
    if (cardMap.has(cards[i]))
        cardMap.set(cards[i], cardMap.get(cards[i]) + 1);
    else
        cardMap.set(cards[i], 1);
}

const m = Number(input[2]);
const testCards = input[3].split(" ").map(Number);
let ans = [];
for (let i=0; i<testCards.length; i++) {
    if (cardMap.has(testCards[i])) {
        ans.push(cardMap.get(testCards[i]));
    } else {
        ans.push(0);
    }
}

console.log(ans.join(' '));
