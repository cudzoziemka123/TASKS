/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues (obj) {
  const objArr = Object.keys(obj)
  let result = 0 
  objArr.forEach (key => {    
      if (obj.hasOwnProperty(key)) 
      {     
        if (typeof obj[key] == 'number')
        {
          result = result + obj[key]
        }
      }
    }) 
    return result;
  }
// Создайте функцию здесь

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
