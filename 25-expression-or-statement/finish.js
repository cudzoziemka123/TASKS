/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 // wyrażenie - instruckcja

const myObject = {
  x: 10,
  y: true,
} //instruction

myObject.z = 'abc'// wyrażenie - instruckcja

delete myObject.x //wyrażenie - instruckcja

let newVariable //instruction

newVariable = 30 + 5 //wyrażenie - instruckcja

console.log(newVariable) //wyrażenie - instruckcja

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
} //instruction
