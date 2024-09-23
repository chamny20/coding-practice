const n = Number(require('fs').readFileSync("/dev/stdin").toString().trim());

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    getLength() {
        return this.length;
    }
    
    getHead() {
        return this.head.val;
    }
    
    push(val) {
        const newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        
        this.tail = newNode;
        this.length++;
        
        return newNode;
    }
    
    removeHead() { 
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
}

const cards = new LinkedList();

for (let i=1; i<=n; i++) {
    cards.push(i);
}

while (cards.getLength() !== 1) {
    cards.removeHead();
    cards.push(cards.getHead());
    cards.removeHead();
}

console.log(cards.getHead());
