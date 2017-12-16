// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(number) {
    if (number > this.data) {
      if (this.right === null) {
        this.right = new Node(number);
      } else {
        this.right.insert(number);
      }
    } else {
      if (this.left === null) {
        this.left = new Node(number);
      } else {
        this.left.insert(number);
      }
    }
  }

  contains(number) {
    if (number === this.data) return this;
    if (number > this.data) {
      if (!this.right) return null;
      return this.right.contains(number);
    }
    if (number < this.data) {
      if (!this.left) return null;
      return this.left.contains(number);
    }
  }
}

module.exports = Node;
