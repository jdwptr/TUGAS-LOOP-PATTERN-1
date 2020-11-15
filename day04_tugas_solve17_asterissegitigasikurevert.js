//CASE :
// * * * * *
// * * * *
// * * *
// * *
// *

let n = 5
let pattern = ''
for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        pattern += '* '
    }
    pattern += '\n'
}
console.log(pattern)