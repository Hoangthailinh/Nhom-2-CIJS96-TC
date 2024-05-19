// Bài tập 1

//Cách 1

// function bai1 (a) {
//     return a*a
// }

// console.log(bai1(4))

//Cách 2

// let square = (number) => {
//     return number * number
// }

// let inputNumber = 4
// let result = square(inputNumber)
// console.log(`square(${inputNumber}) -> ${result}`)
// =============================================================================================================================================================================
// Bài tập 2

//Cách 1

// let bai2 = ["Hello world", "world"]

// console.log(bai2.includes("Hello world"))

// console.log(bai2.includes("World"))

// // //Cách 2

// const bai22 = ["Helo world", "world"]

// console.log(bai22.indexOf("Helo world"))

// console.log(bai22.indexOf("World"))

// // //Cách 3

// let containsKeyword = (str, keyword) => {
//   return str.includes(keyword)
// };

// let inputString = "Hello world!"
// let keyword = "world"
// let result = containsKeyword(inputString, keyword)
// console.log(`function('${inputString}', '${keyword}') -> ${result}`)
// =============================================================================================================================================================================
//Bài tập 3

//Cách 1

// let addPrefix = (arr, prefix) => arr.map(item => `${prefix}: ${item}`)
// let inputArray = ["one", "two", "three"]
// let prefix = "number"
// let outputArray = addPrefix(inputArray, prefix)

// console.log(outputArray)

//Cách 2

// let addPrefix = (arr, prefix) => {
//   let result = []

//   for (let i = 0; i < arr.length; i++) {
//     result.push(`${prefix} ${arr[i]}`)
//   }
//   return result
// };

// const inputArray = ["one", "two", "three"]
// const prefix = "number:"
// const prefixedArray = addPrefix(inputArray, prefix)
// console.log(prefixedArray)
// =============================================================================================================================================================================
//Bài tập 4

//Cách 1

// const doubleValues = (arr) => {
//     return arr.map(num => num * 2)
// }

// const inputArray = [1, 2, 3, 4]
// const doubledArray = doubleValues(inputArray);
// console.log(doubledArray);  // Output: [2, 4, 6, 8]

//Cách 2

// let doubleValues = (arr) => {
//     let result = []

//     for(let i = 0; i < arr.length; i++){
//         let num = 2*arr[i]
//         result.push(num)
//     }

//     return result
// }

// console.log(doubleValues([1, 2, 3, 4]))
// =============================================================================================================================================================================
//Bài tập 5

//Cách 1

// const getOddNumbers = arr => arr.filter(num => num % 2 !== 0)
// const inputArray = [1, 2, 3, 4, 5, 6];
// const oddNumbers = getOddNumbers(inputArray)

// console.log(oddNumbers)

//Cách 2

//Số lẻ

// let sole = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i])
//     }
//   }

//   return result
// };

// console.log(sole([1, 2, 3, 4, 5, 6]))

// //Số chẵn

// let sochan = (arr) => {
//   let result = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i])
//     }
//   }

//   return result;
// };

// console.log(sochan([1, 2, 3, 4, 5, 6]))
// =============================================================================================================================================================================
//Bài tập 6

//Cách 1

// let employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// let totalWorkingDays = employees.reduce((total, employee) => total + employee.workingDays, 0)

// console.log(totalWorkingDays)

//Cách 2

// const employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// let countWorkingDay = (employees) => {
//     let result = 0

//     for(let i = 0; i < employees.length; i++) {
//         result += employees[i].workingDays
//     }

//     return result
// }

// console.log(countWorkingDay(employees))
// =============================================================================================================================================================================
//Bài tập 7

//Cách 1

// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
// ];

// const highestPaidEmployee = employees.reduce((maxSalaryEmployee, employee) => {
//   return employee.salary > maxSalaryEmployee.salary
//     ? employee
//     : maxSalaryEmployee
// }, employees[0])

// console.log(highestPaidEmployee)

//Cách 2

// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
// ];

// let findHighestPaidEmployee = (employees) => {
//   let result = employees[0]

//   for (let i = 1; i < employees.length; i++) {
//     if (employees[i].salary > result.salary) {
//       result = employees[i]
//     }
//   }

//   return result
// }

// let highestPaidEmployee = findHighestPaidEmployee(employees)
// console.log(highestPaidEmployee)
