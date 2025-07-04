function Multiple3or5 (number){
    if(number < 0) return 0;
    
    let sum = 0;
    let num_loop = number - 1;
    for(let i = num_loop; i > 0;  i--){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    
    }
    return sum
}

module.exports = Multiple3or5;