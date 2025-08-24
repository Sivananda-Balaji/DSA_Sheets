//Singly Linked List

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}

const list = new SinglyLinkedList();

console.log(list);
