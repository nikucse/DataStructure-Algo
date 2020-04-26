class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = temp.next;
    }
    temp.next = null;
    --this.size;
    return temp.value;
  }
}

let queue = new Queue();

console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.enqueue(40));
console.log(queue.dequeue());
console.log(queue.enqueue(40));
console.log(queue.dequeue());
