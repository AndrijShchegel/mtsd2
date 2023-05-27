"use strict"

const { arrayList } = require("./main.js");

describe("length()", () => {
    test("When list is empty returns 0", () => {
      const list = new arrayList();
      expect(list.length()).toBe(0);
    });

    test("When list not empty return correct length", () => {
        const list = new arrayList();
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
    const list = new arrayList();
    list.append("a");
    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("When appending new node and list is not empty", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("When invalid input type, throw error", () => {
    const list = new arrayList();
    expect(() => {
      list.append(7);
    }).toThrow("Error. Wrong input type");

    expect(() => {
      list.append("abcd");
    }).toThrow("Error. Wrong input type");
    expect(list.length()).toBe(0);
  });
});

describe("insert()", () => {
  test("When inserting new element and list is empty ", () => {
    const list = new arrayList();
    list.insert("a", 0);
    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("When inserting new element at the begining of not empty list", () => {
    const list = new arrayList();
    list.append("a");
    list.insert("b", 0);
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("a");
    expect(list.length()).toBe(2);
  });

  test("When inserting new element at the end of not empty list", () => {
    const list = new arrayList();
    list.append("a");
    list.insert("b", 1);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("When inserting new element in the middle of not empty list", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.insert("c", 1);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("c");
    expect(list.get(2)).toBe("b");
    expect(list.length()).toBe(3);
  });
  test("When inserting new element on negative index", () => {
    const list = new arrayList();
    const checkNegIndex = () => list.insert("b", -1);
    expect(checkNegIndex).toThrow("Error. Wrong index");
  });

  test("When inserting new element on index that out of range", () => {
    const list = new arrayList();
    const checkBigIndex = () => list.insert("a", 10);
    expect(checkBigIndex).toThrow("Error. Wrong index");
  });

  test("When inserting new element with invalid data type", () => {
    const list = new arrayList();
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
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.delete(0);
    list.delete(0);
    expect(list.length()).toBe(0);
  });

  test("When deleting the first node element", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    const deleted = list.delete(0);
    expect(deleted).toBe("a");
    expect(list.get(0)).toBe("b");
    expect(list.length()).toBe(1);
  });

  test("When deleting the last node element", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    const deleted = list.delete(1);
    expect(deleted).toBe("b");
    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("When deleting node element in the middle", () => {
    const list = new arrayList();
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
    const list = new arrayList();
    list.append("a");
    list.append("b");
    const checkNegIndex = () => list.delete(-1);

    expect(checkNegIndex).toThrow("Error. Wrong index");
    expect(list.length()).toBe(2);
  });

  test("When deleting node if index is out of range", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    const checkBigIndex = () => list.delete(3);

    expect(checkBigIndex).toThrow("Error. Wrong index");
    expect(list.length()).toBe(2);
  });
});

describe("deleteAll()", () => {
  test("When deleting all the nodes with matching element", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    list.append("b");
    list.deleteAll("a");
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.get(2)).toBe("b");
  });

  test("When deleting all the nodes with every element in list matching", () => {
    const list = new arrayList();
    list.append("a");
    list.append("a");
    list.append("a");
    list.deleteAll("a");
    expect(list.length()).toBe(0);
  });

  test("When the list is empty cause no effect", () => {
    const list = new arrayList();
    list.deleteAll("a");
    expect(list.length()).toBe(0);
  });

  test("When there is no matching elements in list cause no effect", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.append("c");
    list.deleteAll("d");
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });
});

describe("get()", () => {
  test("When returning the element by it's index", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("When get on negative index", () => {
    const list = new arrayList();
    list.append("a");
    expect(() => {
      list.get(-1);
    }).toThrow("Error. Wrong index");
  });

  test("When get on index that is out of range", () => {
      const list = new arrayList();
      list.append("a");
      expect(() => {
          list.get(2);
      }).toThrow("Error. Wrong index");
  });
});

describe("clone()", () => {
  test("When returning a new list which has the same elements", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    const clonedList = list.clone();
    expect(clonedList.length()).toEqual(2);
    expect(clonedList.get(0)).toEqual("a");
    expect(clonedList.get(1)).toEqual("b");
  });

  test("When cloned list must not affect original one", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    const clonedList = list.clone();
    clonedList.delete(0);
    expect(clonedList.length()).toEqual(1);
    expect(list.length()).toEqual(2);
  });

  test("When returning an empty list if cloning from empty", () => {
    const list = new arrayList();
    const clonedList = list.clone();
    expect(clonedList.length()).toEqual(0);
  });
});

describe("reverse()", () => {
  test("When returning reversed list", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.append("c");
    list.reverse();
    expect(list.get(0)).toEqual("c");
    expect(list.get(1)).toEqual("b");
    expect(list.get(2)).toEqual("a");
  });

  test("When returning the same list if there is only 1 node", () => {
    const list = new arrayList();
    list.append("a");
    list.reverse();
    expect(list.get(0)).toEqual("a");
  });

  test("When reversing the empty list", () => {
    const list = new arrayList();
    expect(() => {
      list.reverse();
    }).toThrow("Error. The list is empty");
  });
});

describe("findFirst()", () => {
  test("When returning index of the first occurrence of an element", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.append("a");
    list.append("c");

    expect(list.findFirst("a")).toEqual(0);
    expect(list.findFirst("b")).toEqual(1);
    expect(list.findFirst("c")).toEqual(3);
  });

  test("When returning -1 if the element has been not found", () => {
    const list = new arrayList();
    list.append("a");  
    expect(list.findFirst("b")).toEqual(-1);
  });

  test("When returning -1 if the list is empty", () => {
    const list = new arrayList();
    expect(list.findFirst("a")).toBe(-1);
  });
});

describe("findLast()", () => {
  test("When must return the index of the last occurrence of the element", () => {
    const list = new arrayList();
    list.append("a");
    list.append("b");
    list.append("a");
    list.append("c");

    expect(list.findLast("a")).toEqual(2);
    expect(list.findLast("b")).toEqual(1);
    expect(list.findLast("c")).toEqual(3);
  });

  test("When returning -1 if the element has been not found", () => {
    const list = new arrayList();
    list.append("a");  
    expect(list.findLast("x")).toEqual(-1);
  });

  test("When returning -1 if the list is empty", () => {
    const list = new arrayList();
    expect(list.findLast("a")).toBe(-1);
  });
});

describe("clear()", () => {
  test("When removing all elements from list", () => {
    const list = new arrayList();
    list.append("a");
    list.clear();
    expect(list.length()).toBe(0);
  });

  test("When removing all elements from an empty list", () => {
    const list = new arrayList();   
    list.clear();
    expect(list.length()).toBe(0);
  });
});

describe("extend()", () => {
  test("When adding all elements of the given list to the end of first list", () => {
    const list1 = new arrayList();
    list1.append("a");
    const list2 = new arrayList();
    list2.append("b");
    list1.extend(list2);

    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
    expect(list1.length()).toEqual(2);
  });

  test("When given list is empty cause no effect", () => {
    const list1 = new arrayList();
    list1.append("a");
    const list2 = new arrayList();
    list1.extend(list2);

    expect(list1.length()).toEqual(1);
    expect(list1.get(0)).toEqual("a");
  });
});
