//CASE :
// *
// * *
// * * *
// * * * * 
// * * * * *

let n = 5
let pattern = ''
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += '* '
    }
    pattern += '\n'
}
console.log (pattern)

//Loop j bergantung Loop i