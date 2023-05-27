"use strict"

const { circularList } = require("./main.js");

describe("length()", () => {
    test("When list is empty returns 0", () => {
      const list = new circularList();
      expect(list.length()).toBe(0);
    });

    test("When list not empty return correct length", () => {
        const list = new circularList();
        list.append("a");
        list.append("b");
        list.append("c");
        list.append("d");
        list.append("e");
        expect(list.length()).toBe(5);
      });
});

describe("append()", () => {
  test("When appending new node and list is empty ", () => {
    const list = new circularList();
    list.append("a");
    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("When appending new node and list is not empty", () => {
    const list = new circularList();
    list.append("a");
    list.append("b");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("When invalid input type, throw error", () => {
    const list = new circularList();
    expect(() => {
      list.append(7);
    }).toThrow("Error. Wrong input type");

    expect(() => {
      list.append("abcd");
    }).toThrow("Error. Wrong input type");
    expect(list.length()).toBe(0);
  });

  describe("insert()", () => {
    test("When inserting new element and list is empty ", () => {
      const list = new circularList();
      list.insert("a", 0);
      expect(list.get(0)).toBe("a");
      expect(list.length()).toBe(1);
    });
  
    test("When inserting new element at the begining of not empty list", () => {
      const list = new circularList();
      list.append("a");
      list.insert("b", 0);
      expect(list.get(0)).toBe("b");
      expect(list.get(1)).toBe("a");
      expect(list.length()).toBe(2);
    });
  
    test("When inserting new element at the end of not empty list", () => {
      const list = new circularList();
      list.append("a");
      list.insert("b", 1);
      expect(list.get(0)).toBe("a");
      expect(list.get(1)).toBe("b");
      expect(list.length()).toBe(2);
    });
  
    test("When inserting new element in the middle of not empty list", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      list.insert("c", 1);
      expect(list.get(0)).toBe("a");
      expect(list.get(1)).toBe("c");
      expect(list.get(2)).toBe("b");
      expect(list.length()).toBe(3);
    });

    test("When inserting new element on negative index", () => {
      const list = new circularList();
      const checkNegIndex = () => list.insert("b", -1);
      expect(checkNegIndex).toThrow("Error. Wrong index");
    });
  
    test("When inserting new element on index that out of range", () => {
      const list = new circularList();
      const checkBigIndex = () => list.insert("a", 10);
      expect(checkBigIndex).toThrow("Error. Wrong index");
    });
  
    test("When inserting new element with invalid data type", () => {
      const list = new circularList();
      expect(() => {
        list.insert(7, 0);
      }).toThrow("Error. Wrong input type");
      expect(() => {
        list.append("abcd", 0);
      }).toThrow("Error. Wrong input type");
      expect(list.length()).toBe(0);
    });
  });

  describe("delete()", () => {
    test("When deleting every node length must be 0", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      list.delete(0);
      list.delete(0);
      expect(list.length()).toBe(0);
    });
  
    test("When deleting the first node element", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      const deleted = list.delete(0);
      expect(deleted).toBe("a");
      expect(list.get(0)).toBe("b");
      expect(list.length()).toBe(1);
    });
  
    test("When deleting the last node element", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      const deleted = list.delete(1);
      expect(deleted).toBe("b");
      expect(list.get(0)).toBe("a");
      expect(list.length()).toBe(1);
    });
  
    test("When deleting node element in the middle", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      list.append("c");
      const deleted = list.delete(1);
      expect(deleted).toBe("b");
      expect(list.get(0)).toBe("a");
      expect(list.get(1)).toBe("c");
      expect(list.length()).toBe(2);
    });
  
    test("When deleting node if index is negative ", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      const checkNegIndex = () => list.delete(-1);
  
      expect(checkNegIndex).toThrow("Error. Wrong index");
      expect(list.length()).toBe(2);
    });
  
    test("When deleting node if index is out of range", () => {
      const list = new circularList();
      list.append("a");
      list.append("b");
      const checkBigIndex = () => list.delete(3);
  
      expect(checkBigIndex).toThrow("Error. Wrong index");
      expect(list.length()).toBe(2);
    });
  });
});
