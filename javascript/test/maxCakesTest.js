const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

const maxCakes = require("../src/maxCakes")

describe ("Basic Test: maxCakes():", () => {
    it ("Pass example tests", ()=>{
        let recipe = {flour: 500, sugar: 200, eggs: 1};
        let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
        assert.strictEqual(maxCakes(recipe,available),2)

        recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
        available = {sugar: 500, flour: 2000, milk: 2000};
        assert.equal(maxCakes(recipe, available), 0);
    })
})