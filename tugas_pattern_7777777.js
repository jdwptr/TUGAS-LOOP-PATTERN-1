// input = 7
// 1111111 
// 1111122 7-2 = 5
// 1111333 7-3 = 4
// 1114444 7-4 = 3
// 1155555
// 1666666
// 7777777

// bar = 0 kol = 0 => 1
// bar = 0 kol = 1 => 1
// bar = 0 kol = 2 => 1
// bar = 0 kol = 3 => 1
// bar = 0 kol = 4 => 1
// bar = 0 kol = 5 => 1
// bar = 0 kol = 6 => 1
// bar = 0 kol = 7 => 1

let n = 7
let pattern = ''
let output = 1

for (let baris = 1; baris <= n; baris++) {
    for (let kolom = 1; kolom <= n; kolom++) {
        if (kolom >  n - baris) {
            output = baris
        }
        pattern += `${output}`
    }
    output = 1
    pattern += '\n'
}
console.log(pattern)