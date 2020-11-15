// input = 5
// * * * * a | 1
// * * * b a | 2 1
// * * c b a | 3 2 1
// * d c b a | 4 3 2 1 
// e d c b a | 5 4 3 2 1

let n = 5
let pattern = ''
let output = '* '

for (let baris = 0; baris < n; baris ++) {
    for (let kolom = 0; kolom < n; kolom++) {
        if (kolom >= n - baris - 1) {
            output = String.fromCharCode (96 + (n-kolom)) + ' '
        }
        pattern += output
    }
    output = '* '
    pattern += `\n`
}
console.log(pattern)