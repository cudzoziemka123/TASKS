/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

const greetings = 'Good Morning '
const greetingsArray = greetings.split(' ')
const greetings2 = greetingsArray[0]+' Evening'
console.log(greetings2)

const updatedGreeting = greetings.replace('Morning', 'Evening')
console.log(updatedGreeting)

