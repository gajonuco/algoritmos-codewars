const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const getMiddle = require("../src/getMiddle"); 

describe("Basic tests: getMiddle()", () => {
  it("Fixed tests", () => {
    assert.strictEqual(getMiddle("test"), "es");
    assert.strictEqual(getMiddle("testing"), "t");
    assert.strictEqual(getMiddle("middle"), "dd");
    assert.strictEqual(getMiddle("A"), "A");
    assert.strictEqual(getMiddle("of"), "of");
    assert.strictEqual(getMiddle("abcde"), "c");
    assert.strictEqual(getMiddle("abcd"), "bc");
  });
});
