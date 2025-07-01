function openOrSenior(data) {
    return data.map(member => {
        const [age, handicap] = member;
        if (age >= 55 && handicap >= 7){
            return "Senior";
        } else {
            return "Open";
        }
    });
}
module.exports = openOrSenior;