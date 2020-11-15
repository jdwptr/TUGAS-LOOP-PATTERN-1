/*

      *
     1 2
    * * *
   1 2 3 4
  * * * * *
 1 2 3 4 5 6
* * * * * * *

*/

// input 7

let a = 7
let b = ''

for (let i = 0; i < a; i++) {
      for (let j = a; j > i; j--) {
            b+=' '
      }

      for (let k = 0; k < i; k++) {
            if (i % 2 !== 0) {
                  b += k + 1 + ' '
            } else {
                  b += "* "
            }
      }
      b += '\n'
}
console.log(b)