// INPUT = 5
// OUTPUT = 

// 1
// 1 2
// 1 2 3
// 1 2 3 5
// 1 2 3 5 8

//coba pake FIBONACCI
let n = 5
let pattern = ''
let initial = 0
let current = 1

for (let baris = 0; baris < n; baris++) {
    for (let kolom = 0; kolom <= baris; kolom++) {
        let temp = current

        current += initial
        initial = temp
        pattern += `${current}`
    }
    //reset value
    pattern +='\n'
    initial = 0
    current = 1
}
console.log(pattern)

// i = 0, j = 0, j<=i = true => temp = 1, current = 0+1 = 1; initial = 1, pattern += ...
