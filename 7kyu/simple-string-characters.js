const solve = (s) => {
    let upper = (s.match(/[A-Z]/g) || []).length
    let lower = (s.match(/[a-z]/g) || []).length
    let number = (s.match(/[0-9]/g) || []).length
    let special = s.length - upper - lower - number
    return [upper, lower, number, special];
}

console.log(solve("aAbBcC"))