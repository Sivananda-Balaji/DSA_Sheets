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
  prepend(data) {
    const node = new Node(data);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty!");
    } else {
      let curr = this.head;
      while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }
}

const list = new SinglyLinkedList();

list.prepend(10);
list.prepend(20);

list.print();

console.log("-------------");

list.prepend(30);

list.print();
