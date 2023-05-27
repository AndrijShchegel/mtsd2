"use strict"

class arrayList {
  constructor() {
    this.array = [];
  }

  length() {
    return this.array.length;
  }

  append(value) {
    if (typeof value === "string" && value.length === 1) {
      this.array.push(value);
    } else {
      throw new Error("Error. Wrong input type");
    }
  }

  insert(value, index) {
    if (typeof value !== "string" && value.length !== 1) {
      throw new Error("Error. Wrong input type");
    }
    if (index < 0 || index > this.array.length) {
      throw new Error("Error. Wrong index");
    }
    this.array.splice(index, 0, value);
  }
  
  delete(index) {
    if (index < 0 || index > this.array.length - 1) {
      throw new Error("Error. Wrong index");
    }
    const deletedItem = this.get(index);
    this.array.splice(index, 1);
    return deletedItem;
  }

  deleteAll(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        this.array.splice(i, 1);
        i--;
      }
    }
  }

  get(index) {
    if (index < 0 || index > this.array.length - 1) {
      throw new Error("Error. Wrong index");
    }
    return this.array[index];
  }

  clone() {
    const newList = new arrayList();
    for (let i = 0; i < this.array.length; i++) {
      newList.append(this.array[i]);
    }
    return newList;
  }

  reverse() {
    if (this.array.length > 0) {
    this.array.reverse();
    } else {
        throw new Error("Error. The list is empty")
    }
  }

  findFirst(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  findLast(value) {
    let indexToFind = -1;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === value) {
        indexToFind = i;
      }
    }
    return indexToFind;
  }

  clear() {
    this.array = [];
  }

  extend(array) {
    for (let i = 0; i < array.length(); i++) {
      this.array.push(array.get(i))
    }
  }
}

module.exports = { arrayList };
