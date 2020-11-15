// INPUT = 5
//OUTPUT =

// A
// A B
// A B C
// A B C D
// A B C D E

let n = 5
let alphabet = 'ABCDE'
let pattern = ''

//METHOD STRING :
// .charAt(index)
// untuk mencari karakter pada index yg diberikan
for (let baris = 0; baris < n; baris++) {
    for (let kolom = 0; kolom <= baris; kolom++) {
        pattern += alphabet.charAt(kolom)
    }
    if (baris !== n - 1) {
        pattern += '\n'
    }
}
//console.log(pattern) 

//CARA 2
// pakai String.fromCharCode(), convert ASCII symbol code to string
// String.fromCharCode(65,66,67) = ABC

console.log(String.fromCharCode(65)) // A
/*console.log(String.fromCharCode(65,66))
console.log(String.fromCharCode(65,66,67))
console.log(String.fromCharCode(65,66,67,68))
console.log(String.fromCharCode(65,66,67,68,69)) */

let pattern2 = ''
for (let baris = 0; baris < n; baris++) {
    for (kolom = 0; kolom <= baris; kolom++) {
        pattern2 += String.fromCharCode(65 + kolom)
    }
    if (baris !== n - 1) {
        pattern2 += '\n'
    }
}
console.log(pattern2)

//NOTE : KEBALIKAN DARI String.fromCharCode() => String.charCodeAt()
//NGAMBIL INDEX .charCodeAt() cuma bisa satu
console.log('A'.charCodeAt(0)) // 65
console.log('a'.charCodeAt(0)) // 97
console.log('ABCD'.charCodeAt(0)) // 65
