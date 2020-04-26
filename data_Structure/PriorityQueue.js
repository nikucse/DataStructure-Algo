class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor(index - 1 / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    let element = this.values[0];
    let length = this.values.length;
    while (true) {
      let right, left;
      let leftChildIndex = Math.floor(2 * index + 1);
      let rightChildIndex = Math.floor(2 * index + 2);
      let swap = null;
      if (length > leftChildIndex) {
        left = this.values[leftChildIndex];
        if (left.priority < element.priority) swap = leftChildIndex;
      }
      if (length > rightChildIndex) {
        right = this.values[rightChildIndex];
        if (
          (swap === null && right.priority < element.priority) ||
          (swap !== null && right.priority < left.priority)
        )
          swap = rightChildIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Ministers", 3);
priorityQueue.enqueue("Ambulance / FireBrigade / Police", 1);
priorityQueue.enqueue("Prime Minister", 2);
priorityQueue.enqueue("Common Man", 5);
priorityQueue.enqueue("Heavy vehicle", 4);
//console.log(priorityQueue);
//console.log(priorityQueue.dequeue());

console.log(priorityQueue);
console.log("------------------");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log("------------------");
console.log(priorityQueue);
