class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;

    let popNode = this.first;
    if (this.size === 1) {
      this.last == null;
      this.first == null;
    } else {
      this.first = popNode.next;
      popNode.next = null;
    }
    this.size--;
    return popNode.value;
  }
}

let stack = new Stack();
console.log(stack.push(10));
//console.log(stack.push(20));
//console.log(stack.push(30));
//console.log(stack.push(40));
console.log(stack.pop());
//console.log(stack.push(50));
//console.log(stack.pop());
