class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  remove(index) {
    // Function takes an index

    // If the index is less than zero or greater than the length, return null
    if (index < 0 || index > this.length) return null;
    // If the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();
    // If the index is 0, shift
    if (index === 0) return this.shift();
    // Otherwise, using the get method, access the node at the index - 1
    const prev = this.get(index - 1);
    // Set the next property on that node to be the next of the next node
    const removed = prev.next;
    prev.next = removed.next;
    // Decrement the length
    this.length--;
    // Return the value of the node removed
    return removed;
  }
}

const list = new SinglyLinkedList();
list.push(20);
list.push(19);
list.push(18);
list.push(17);
list.push(16);
list.push(15);
list.push(14);
list.push(13);
list.push(12);
list.push(11);

console.log(list);

function kthLinkedList(head, k) {
  let count = 1,
    listHead = head,
    removedPrev = null,
    removedCurr = listHead,
    current = listHead;

  console.log(head);
  console.log(current.next);
  while (current.next) {
    if (current.next.next) {
      if (count < k - 1) {
        current = current.next;
        count++;
      } else if (count >= k - 1) {
        removedPrev = removedCurr;
        removedCurr = removedPrev.next;
        current = current.next;
        count++;
      }
    } else {
      if (count === k - 1) {
        const oldHead = removedCurr;
        listHead = removedCurr.next;
        oldHead.next = null;
        return listHead;
      } else if (count < k - 1) {
        return listHead;
      } else {
        removedPrev.next = removedCurr.next;
        removedCurr.next = null;
        break;
      }
    }
  }
  console.log(listHead);
  return listHead;
}

kthLinkedList(list.head, 15);
