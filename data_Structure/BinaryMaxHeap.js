class BinaryMaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  remove() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (length > leftChildIndex) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) swap = leftChildIndex;
      }
      if (length > rightChildIndex) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIndex;
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] == element;
      index = swap;
    }
  }
}

let maxHeap = new BinaryMaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(5);
maxHeap.insert(7);
maxHeap.insert(9);
maxHeap.insert(20);
console.log(maxHeap);
console.log(maxHeap.remove());
console.log(maxHeap);
