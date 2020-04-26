// Creating Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Creating Doubly Linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removeNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removeNode.prev;
      this.tail.next = null;
      removeNode.prev = null;
    }
    this.length--;
    return removeNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unShift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || this.length < index) return false;
    if (index === 0) return !!this.unShift(value);
    if (this.length === index) return !!this.push(value);
    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  delete(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.prev = null;
    removeNode.next = null;
    return removeNode;
  }
}

let list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);
//console.log(list.pop());
//console.log(list.shift());
//console.log(list.unShift(50));
//console.log(list.get(2));
//console.log(list.set(2, 200));
//console.log(list.insert(3, 100));
//console.log(list.delete(2));

//console.log(list);
console.log(list);
console.log(list.reverse());
