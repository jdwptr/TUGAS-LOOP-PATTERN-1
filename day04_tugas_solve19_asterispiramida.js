/* let pattern19 = ''
for (let a = 0; a < 1; a++) {
    for (let b = 0; b < 1; b++) {
        for (let c = 0; c < 1; c++) {
            for (let d = 0; d < 1; d++) {
                for (let e = 0; e < 1; e++) {
                    for (let f = 0; f < 1; f++) {
                        for (let g = 0; g < 1; g++) {
                            for (let h = 0; h < 1; h++) {
                                for (let i = 0; i < 1; i++) {
                                    for (let j = 0; j < 1; j++) {
                                    pattern19 = pattern19 + '                  *         \n'
                                    }
                                    pattern19 = pattern19 + '                * * *        \n'    
                                }
                                 pattern19 = pattern19 + '              * * * * *       \n'
                            }
                            pattern19 = pattern19 + '            * * * * * * *      \n'
                        }
                        pattern19 = pattern19 + '          * * * * * * * * *     \n'
                    }
                    pattern19 = pattern19 + '        * * * * * * * * * * *    \n'
                }
                pattern19 = pattern19 + '      * * * * * * * * * * * * *   \n'
            }
            pattern19 = pattern19 + '    * * * * * * * * * * * * * * *\n'
        }
        pattern19 = pattern19 + '  * * * * * * * * * * * * * * * * *\n'
    }
    pattern19 = pattern19 + '* * * * * * * * * * * * * * * * * * *\n'
}

console.log(pattern19) */

//CASE :

//                   *
//                 * * *
//               * * * * *
//             * * * * * * *
//           * * * * * * * * *
//         * * * * * * * * * * *
//       * * * * * * * * * * * * *
//     * * * * * * * * * * * * * * *
//   * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * *

// let n = 10
// let pattern = ''

// for (let i = 0; i < 10; i++) {
//     //untuk spasi
//     for (let j = 0; j < n - i - 1; j++) {
//         pattern += ' '
//     }
//     //untuk isi bintang
//     for (let k = 0; k < 2 * i - 1; k++) {
//         pattern += '*'
//     }
//     //untuk pindah baris
//     pattern += '\n'
// }
// console.log(pattern)

let n = 7
let pattern = ''

for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
        pattern +=' '
    }

    for (let k = 0; k < i; k++){
        pattern +="* "
    }
    pattern +='\n'
}
console.log(pattern)