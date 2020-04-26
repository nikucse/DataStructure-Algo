class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else currentNode = currentNode.right;
      }
    }
  }

  search(input) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (input < current.value) current = current.left;
      else if (input > current.value) current = current.right;
      else found = true;
    }
    return found ? current : false;
  }
  bfs() {
    let data = []; // store final result
    let queue = []; // extract data from that
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  preOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  postOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  inOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(8);
bst.insert(3);
bst.insert(20);
//console.log(bst);
//console.log(bst.search(13));
console.log(" ----------- BFS ------------ ");
console.log(bst.bfs());
console.log(" ----------- PreOrder ------- ");
console.log(bst.preOrder());
console.log(" ---------- PostOrder ------- ");
console.log(bst.postOrder());
console.log(" ---------- InOrder ------- ");
console.log(bst.inOrder());
