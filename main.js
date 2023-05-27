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
}
