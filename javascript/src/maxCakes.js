
function maxCakes(recipe, available){
    
let maxCakes = Infinity

for (ingredient in recipe) {
    if(!available[ingredient]){
        return 0;
    }

    const possibleCakes = Math.floor(available[ingredient]/recipe[ingredient])

    maxCakes = Math.min(maxCakes, possibleCakes)
    
    }

    return maxCakes
}

module.exports = maxCakes;