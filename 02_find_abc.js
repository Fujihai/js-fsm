/**
 * 查找字符串 'abc'
 * @param {String} string 
 */
function match (string) {
    let foundA = false
    let foundB = false

    for (let c of string) {
        if (c === 'a') {
            foundA = true
        } else if (foundA && c === 'b') {
            foundB = true
        } else if (foundB && c === 'c') {
            return true;
        } else {
            foundA = false
            foundB = false
        }
    }
    return false
}

console.log(match('abc'))   // true
console.log(match('acbc'))  // false