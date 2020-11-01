/**
 * 查找字符串 'NICE'
 * @param {String} string 
 */
function match(string) {
    let state = start
    for (let c of string) {
        state = state(c)
    }
    return state === success
}

function start (c) {
    if (c === 'N') {
        return foundN
    } else {
        return start
    }
}

function success (c) {
    return arguments.callee
}

function foundN (c) {
    if (c === 'I') {
        return foundI
    } else {
        return start
    }
}

function foundI (c) {
    if (c === 'C') {
        return foundC
    } else {
        return start
    }
}

function foundC (c) {
    if (c === 'E') {
        return success
    } else {
        return start
    }
}

console.log(match('NIABC'))         // false
console.log(match('AB NICE KL'))    // true
console.log(match('NICNIC'))        // false
