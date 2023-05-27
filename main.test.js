"use strict"

const { circularList } = require("./main.js");

describe("length()", () => {
    test("When list is empty returns 0", () => {
      const list = new circularList();
      expect(list.length()).toEqual(0);
    });
});
