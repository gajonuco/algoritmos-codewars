const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const Multiple3or5 = require("../src/Multiple3or5")

describe("Basic test: Multiple3or5()", () =>{
    it ("Fixed test", () => {
        assert.strictEqual(Multiple3or5(10), 23);
        assert.strictEqual(Multiple3or5(-5), 0);
        assert.strictEqual(Multiple3or5(0), 0);
        assert.strictEqual(Multiple3or5(16), 60);

    })
})