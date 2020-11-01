/**
 * 查找字符串 'a'
 * @param {String} string 
 */
function match (string) {
    for (let c of string) {
        if (c === 'a') {
            return true
        }
    }
    return false
}

console.log(match('abc'))