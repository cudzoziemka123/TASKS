/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь

const myFn = (myVariable1, myVariable2) => {
    myVariable2 = Number(myVariable2)
    myVariable1 = Number(myVariable1)
    if (myVariable1 <= myVariable2) {
        console.log(true)
    }
}
myFn(myVariable1, myVariable2)

myVariable1 = '20'
myVariable2 = 100

myFn(myVariable1, myVariable2)


// Напишите код здесь
