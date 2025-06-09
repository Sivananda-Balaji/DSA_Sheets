class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
  prepand(data) {
    const node = new Node(data);
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    this.head = node;
    this.size++;
  }
  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  insert(data, index) {
    if (index < 0 || index > this.getSize()) {
      console.log("Not a Valid Index");
      return;
    }
    if (index === 0) {
      this.prepand(data);
    } else if (index > 0) {
      const node = new Node(data);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
      this.size++;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.getSize()) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removedNode = curr.next;
      curr.next = removedNode.next;
    }
    this.size--;
    return removedNode.data;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }
}

const list = new LinkedList();

console.log("is list empty ?", list.isEmpty());
console.log("list size", list.getSize());

list.prepand(10);
list.prepand(20);
list.prepand(30);
list.append(70);
list.append(100);

list.insert(50, 2);
list.insert(85, 2);

list.print();

list.remove(3);

console.log("-------------");

list.print();

console.log("-------------");
