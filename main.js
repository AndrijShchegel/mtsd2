"use strict"

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class circularList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  append(value) {
    if (typeof value === "string" && value.length === 1) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        this.tail.nextNode = node;
      }
      node.nextNode = this.head;
      this.tail = node;
      this.size++;
    } else {
      throw new Error("Error. Wrong input type");
    }
  }

  insert(value, index) {
    if (typeof value !== "string" && value.length !== 1) {
      throw new Error("Error. Wrong input type");
    }
    if (index < 0 || index > this.size) {
      throw new Error("Error. Wrong index");
    }
    const node = new Node(value);
    if (index === 0) {
      node.nextNode = this.head;
      this.head = node;
      this.tail = node;
    } else if (index === this.size) {
      this.tail.nextNode = node;
      this.tail = node;
      node.nextNode = this.head;
    } else {
      let currNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currNode = currNode.nextNode;
      }
      node.nextNode = currNode.nextNode;
      currNode.nextNode = node;
    }
    this.size++;
  }
  
  delete(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Error. Wrong index");
    }
    let deletedItem = null;
    if (this.size === 1) {
      deletedItem = this.head.value;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedItem = this.head.value;
      this.head = this.head.nextNode;
      this.tail.nextNode = this.head;
    } else {
      let currNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currNode = currNode.nextNode;
      }
      deletedItem = currNode.nextNode.value;
      currNode.nextNode = currNode.nextNode.nextNode;
      if (index === this.size - 1) {
        this.tail = currNode;
      }
    }
    this.size--;
    return deletedItem;
  }

  deleteAll(value) {
    let currNode = this.head;
    let prevNode = this.tail;
    for (let i = 0; i < this.size; i++) {
      if (currNode.value === value) {
        if (i === 0) {
          this.head = this.head.nextNode;
          this.tail.nextNode = this.head;
          prevNode = this.tail;
        } else {
          prevNode.nextNode = currNode.nextNode;
          if (i === this.size - 1) {
            this.tail = prevNode;
          }
        }
        this.size--;
        i--;
      } else {
        prevNode = currNode;
      }
      currNode = currNode.nextNode;
    }
  }

  get(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Error. Wrong index");
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.nextNode;
    }
    return currNode.value;
  }

  clone() {
    const newList = new circularList();
    let currNode = this.head;
    for (let i = 0; i < this.size; i++) {
      newList.append(currNode.value);
      currNode = currNode.nextNode;
    }
    return newList;
  }

  reverse() {
    let prevNode = this.tail;
    let currNode = this.head;
    let nextNode;

    if (!currNode) {
      throw new Error("Error. The list is empty");
    }

    for (let i = 0; i < this.size; i++) {
      nextNode = currNode.nextNode;
      currNode.nextNode = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
    this.tail = this.head.nextNode;
  }

  findFirst(value) {
    let currNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currNode.value === value) {
        return i;
      }
      currNode = currNode.nextNode;
    }
    return -1;
  }

  findLast(value) {
    let currNode = this.head;
    let indexToFind = -1;
    for (let i = 0; i < this.size; i++) {
      if (currNode.value === value) {
        indexToFind = i;
      }
      currNode = currNode.nextNode;
    }
    return indexToFind;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  extend(list) {
    let currNode = list.head;
    for (let i = 0; i < list.size; i++) {
      this.append(currNode.value);
      currNode = currNode.nextNode;
    }
  }
}

module.exports = { circularList };
