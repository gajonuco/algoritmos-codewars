function getMiddle(s){
    const len = s.length
    const middle = Math.floor(len/2)

    if(len % 2 == 0){
        return s.slice(middle - 1, middle +1)

    } else{
        return s.charAt(middle)
    }
}

module.exports = getMiddle;