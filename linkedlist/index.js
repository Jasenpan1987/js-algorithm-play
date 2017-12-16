// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.insertAt(item, 0);
  }

  insertLast(item) {
    if (this.getLast()) {
      this.getLast().next = new Node(item, null);
    } else {
      this.head = new Node(item, null);
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while(current) {
      count ++;
      current = current.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let current = this.head;
    
    while(current) {
      if (!current.next) return current;
      current = current.next;
    }
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) return; // empty list
    if (!this.head.next) { // list with only 1 node
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while(currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
  }

  getAt(idx) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) return current;

      current = current.next;
      count ++;
    }
    return null;
  }

  removeAt(idx) {
    if (!this.head) {
      return;
    }

    if (idx === 0) {
      this.removeFirst();
      return;
    }

    let prev = this.getAt(idx - 1);
    if(!prev || !prev.next) return;
    prev.next = prev.next.next;
  }

  insertAt(item, idx) {
    if (!this.head) {
      this.head = new Node(item);
      return;
    }

    if (idx === 0) {
      this.head = new Node(item, this.head);
      return;
    }

    let prev = this.getAt(idx - 1) || this.getLast();
    let newNode = new Node(item, prev.next);
    prev.next = newNode;
  }

  clear() {
    this.head = null;
  }

  forEach(callback) {
    let current = this.head;
    let idx = 0;
    while (current) {
      callback(current, idx);
      current = current.next;
      idx ++;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while(current) {
      yield current;
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
