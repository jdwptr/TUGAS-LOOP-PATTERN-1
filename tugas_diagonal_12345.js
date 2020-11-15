// INPUT = 5
// OUTPUT = 

// 1 0 0 0 0
// 0 2 0 0 0
// 0 0 3 0 0
// 0 0 0 4 0
// 0 0 0 0 5

let n = 5
let pattern = ''

for (let baris = 1; baris <= n ; baris++) {
    for (let kolom = 1; kolom <= n; kolom++) {
        if (baris===kolom) {
            pattern += `${baris}`
        } else {
            pattern += `0`
        }
    }
    pattern += '\n'
}
console.log(pattern)