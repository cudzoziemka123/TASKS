/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  return a + b
}
// firstFunction = 15;

const secondFunction = function (a, b) {
  return a + b
}

// secondFunction = 15;

console.log(firstFunction(2,3))
console.log(secondFunction(3,5))
