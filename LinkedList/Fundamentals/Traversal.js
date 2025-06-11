//Traversal in Linked List

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  LLTraversal(head) {
    const arr = [];
    let curr = head;
    while (curr !== null) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)));

// Create instance of Solution and call the method
const sol = new Solution();
console.log(sol.LLTraversal(head));
