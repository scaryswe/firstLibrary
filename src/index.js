//Challenge 1 capitalize() -makes the first character of a given string uppercase.
const str = 'hello world'

function capitalize(str) {
    const first = str[0].toUpperCase()
    const rest = str.slice(1)
    return first + rest
}

console.log(capitalize(str))
console.log(capitalize('str'))

//Challenge 2 allCaps()- makes all characters uppercase. (this is the same as str.toUpperCase())

function allCaps(str) {
    after = str.toUpperCase()
    return after
}

console.log(allCaps(str))
console.log(allCaps('str'))