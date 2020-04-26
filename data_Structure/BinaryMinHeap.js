class BinaryMinHeap {
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
      if (element >= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  remove() {
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
      let leftChildIndex = Math.floor(2 * index + 1);
      let rightChildIndex = Math.floor(2 * index + 2);
      let left, right;
      let swap = null;
      if (length > index) {
        left = this.values[leftChildIndex];
        if (left < element) swap = leftChildIndex;
      }
      if (length > index) {
        right = this.values[rightChildIndex];
        if (
          (swap === null && right < element) ||
          (swap !== null && right < left)
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

let minHeap = new BinaryMinHeap();
minHeap.insert(23);
minHeap.insert(50);
minHeap.insert(12);
minHeap.insert(9);
minHeap.insert(54);
console.log(minHeap);
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap);
