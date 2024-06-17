/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// OPTION 1
// Array.from(str).forEach(letter=>{
//     vowels.forEach(vowel=> {
//         if(vowel===letter) 
//         {
//             vowelsCount +=1
//         }
//     })
// })

// OPTION 2
// let strArr = str.split('')
// strArr.forEach(letter=>{
//     vowels.forEach(vowel=> {
//         if(vowel===letter) 
//         {
//             vowelsCount +=1
//         }
//     })
// })

// OPTION 3
for (const char of str) {
    if(vowels.includes(char)){
        vowelsCount +=1
    }
}

console.log(vowelsCount)
// 9
