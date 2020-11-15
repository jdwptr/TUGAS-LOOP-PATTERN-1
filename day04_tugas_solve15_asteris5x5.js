let n = 5
let pattern1 = ''

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        pattern1 += '* '
    }
    pattern1 += '\n'
}
console.log(pattern1)