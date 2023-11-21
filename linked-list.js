/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    //  **  If there is nothing in List, throw Error  **
    if (!this.head) {
      throw new Error("Error")
    }
    //  **  check to see if there is only 1 node in the list **
    if (this.head === this.tail) {
      let returnVal = this.head.val
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }
    //  **  As long as there are more than 1 nodes in the list, continue to Pop()  **
    let currentNode = this.head;
    //  **  Traverse to the node BEFORE the tail node and make it the new tail
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    let returnVal = currentNode.next.val;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return returnVal
  }


  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      this.head = null;
      this.tail = null;
      throw new Error("Nothing to delete")
    }

    let removedVal = this.head.val;

    if (this.head.next) {
      this.head = this.head.next;
      this.length -= 1;
      return removedVal;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedVal;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) {
      throw new Error("Nothing to Search")
    }

    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid Index")
    }

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;

    }
    return currentNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) {
      throw new Error("Nothing to Search")
    }

    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid Index")
    }

    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    if (val) {
      currentNode.val = val
    }
    return currentNode;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    //  **  Check for negative number in index parameter  **
    if (idx < 0) {
      throw new Error("Invalid Index");
    }
    //  **  If list is empty, insert new Node into list  **
    if (!this.head) {
      if (val) {
        let newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
      }
    }
    //  **  Check if index is larger than the length of current list  **
    if (idx > this.length) {
      let emptyNodes = idx - this.length;
      //  **  Create empty nodes to populate the new length of list  **
      for (let i = 0; i < emptyNodes; i++) {
        let blankNode = new Node();
        this.tail.next = blankNode;
        this.length++;
      }
      //  **  Create the new node and add it to the end of the list  **
      if (val) {
        let newNode = new Node(val);
        this.tail = newNode;
      }
    } else if (idx === 0) {
      //  **  Handle case for adding new node at index 0  **
      if (val) {
        let oldHead = this.head;
        let newNode = new Node(val);
        newNode.next = oldHead;
        this.head = newNode;
      }
    } else {
      //  **  Main code block to insert new node at selected index  **
      let currentNode = this.head;

      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      let previousNode = currentNode;
      currentNode = currentNode.next;

      if (val) {
        const newNode = new Node(val);
        newNode.next = currentNode;
        previousNode.next = newNode;
        this.length++;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //  **  Check for negative number in index parameter  **
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid Index");
    }
    //  **  If list is empty, insert new Node into list  **
    if (!this.head) {
      throw new Error("Nothing to remove...")
    }
    //  **  Check if index is larger than the length of current list  **
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return undefined
    }

    if (idx === 0) {
      //  **  Handle case for adding new node at index 0  **
      console.log("Removing: ", this.head.val);
      this.head = this.head.next;
      this.length--;
    } else {
      //  **  Main code block to insert new node at selected index  **
      let currentNode = this.head;

      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
      let previousNode = currentNode;
      currentNode = currentNode.next;
      console.log("Removing: ", currentNode.val, "PREV: ", previousNode);
      previousNode.next = currentNode.next;
      this.length--;
      if (!currentNode.next) {
        previousNode.next = null;
        this.tail = previousNode;

      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return 0
    }
    let currentNode = this.head;
    let total = 0;
    while (currentNode.next) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    total += currentNode.val;
    let avg = total / this.length;
    return avg
  }
}


// let theList = new LinkedList()

// theList.push(15)
// theList.push(70)
// theList.unshift(10)
// theList.unshift(5)
// theList.average()


// console.log("LIST: ", theList)

module.exports = LinkedList;
