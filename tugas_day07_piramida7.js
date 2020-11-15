//      7
//     6 6
//    5 5 5
//   4 4 4 4
//  3 3 3 3 3
// 2 2 2 2 2 2
//1 1 1 1 1 1 1

//input = 7

let a = 7
let b = ''

for (let i = 0; i < a; i++) {
    for (let j = a; j > i; j--) {
        b+=' '
    }

    for (let k = 0; k < i+1; k++) {
        b += a - i + ' '
    }
    b += '\n'
}
console.log(b)