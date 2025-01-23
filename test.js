"use strict";

require("mocha");
const assert = require("assert");
const { isOdd, isEven } = require("./");

describe("isOdd", function () {
  it("should return true if the number is odd:", function () {
    assert(!isOdd(0));
    assert(!isOdd(2));
    assert(isOdd(1));
    assert(isOdd(3));
    assert(isOdd(-1));
    assert(isOdd(-3));
    assert(isOdd(1.0));
    assert(isOdd(9007199254740991));
  });

  it("should throw an error when an invalid value is passed", function () {
    assert.throws(() => isOdd(), /expected a number/);
    assert.throws(() => isOdd("foo"), /expected a number/);
    assert.throws(() => isOdd("1.1e0"), /expected an integer/);
  });
});

describe("isEven", function () {
  it("should return true if the number is even:", function () {
    assert(isEven(0));
    assert(!isEven(1));
    assert(isEven(2));
    assert(!isEven(3));
  });

  it("should throw an error on bad args:", function () {
    assert.throws(function () {
      isEven();
    }, /expected a number/);
  });

  it("should throw an error on non-integer args:", function () {
    assert.throws(function () {
      isEven("1.1e0");
    }, /expected an integer/);
  });
});
