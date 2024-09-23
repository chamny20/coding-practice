const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, ...commands] = input;
let ans = '';

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    push(item) {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.head.next = this.tail;
        } else {
            this.tail.next = node;
        }
        
        this.tail = node;
        this.size += 1;
    }
    
    getSize() {
        return this.size;
    }
    
    pop() {
        if (this.size > 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.size -= 1;
            return item;
        } else if (this.size === 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.tail = newHead;
            this.size -= 1;
            return item;
        } else if (this.size === 1) {
            const item = this.head.item;
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return item;
        } else {
            return -1;
        }
    }
    
    empty() {
        return this.size ? 0 : 1;
    }
    
    front() {
        return this.head ? this.head.item : -1;
    }
    
    back() {
        return this.tail ? this.tail.item : -1;
    }
}

const queue = new Queue();

for (let i = 0; i < n; i++) {
    let cmd = commands[i].split(" ")[0];
    switch (cmd) {
        case "push":
            const pushItem = commands[i].split(" ")[1];
            queue.push(pushItem);
            break;
        case "pop":
            ans += queue.pop() + ' ';
            break;
        case "size":
            ans += queue.getSize() + ' ';
            break;
        case "empty":
            ans += queue.empty() + ' ';
            break;
        case "front":
            ans += queue.front() + ' ';
            break;
        case "back":
            ans += queue.back() + ' ';
            break;
        default:
            break;
    }
}

console.log(ans.split(' ').join("\n"));
