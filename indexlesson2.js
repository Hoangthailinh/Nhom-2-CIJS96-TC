//Bài tập 4

// console.log("====== bai4 ======")
// const listNumber = [1, 2, 3, 4]
// const doubleListNumber = listNumber.map((item) => {
//     return item * 2;
// })

// console.log(doubleListNumber)

//Bài tập 5

// console.log("=====  bai5 =====")

// const listNumber = [1, 2, 3, 4, 5, 6]

// const result = listNumber.filter((item) => {
//     return item % 2 !==0
// })

// console.log(result)

//Bài tập 6

// const employees = [
//   { id: 1, name: "John", workingDays: 22 },
//   { id: 2, name: "Jane", workingDays: 20 },
//   { id: 3, name: "Mark", workingDays: 25 },
// ];

// const result = employees.reduce(
//   (prevValue, item) => {
//     return {
//       workingDays: prevValue.workingDays + item.workingDays,
//     };
//   },
//   {
//     workingDays: 0,
//   }
// );

// console.log(result);

//Bài tập 7 


// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// let MAX = employees[0].salary
// if (typeof MAX === 'number') {

// }

// for(let i = 0; i < employees.length; i++) {
//     const element = employees[i]
//     if(element.salary > MAX) {
//         MAX = element.salary
//         indexMax = i 
//     }
// }

// console.log(employees(indexMax))

// //Bài tập 8

// //Cách 1

// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//   { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//   { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ]

// const findHardestWorkingEmployee = (employees) => {
//   let hardestWorking = employees[0]
//   let maxWorkDays = hardestWorking.workingDays - hardestWorking.lateDays

//   for (let i = 1; i < employees.length; i++) {
//     let currentWorkDays = employees[i].workingDays - employees[i].lateDays
//     if (currentWorkDays > maxWorkDays) {
//       hardestWorking = employees[i]
//       maxWorkDays = currentWorkDays
//     }
//   }

//   return hardestWorking

// }

// console.log(findHardestWorkingEmployee(employees))

// //Cách 2

// // const employees = [
// //     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
// //     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
// //     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// // ];

// // let findHardestWorkingEmployee = (employees) => {
// //     let result = employees[0]
// //     let maxWorkDays = result.workingDays - result.lateDays

// //     for(let i = 1; i < employees.length; i++) {
// //         let currentWorkDays = employees[i].workingDays - employees[i].lateDays
// //         if(currentWorkDays > maxWorkDays) {
// //             result = employees[i]
// //             maxWorkDays = currentWorkDays
// //         }
// //     }

// //     return result

// // }

// // console.log(findHardestWorkingEmployee(employees))

//Cách 3

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let MAX = employees[0].workingDays = employees[0].lateDays
// let indexMax = 0

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i]
//     const world = (element.workingDays - element.lateDays)
//     if (works > MAX) {
//         MAX = works
//         indexMax = i
//     }
// }

// console.log(MAX(employees))

// //Bài tập 9

// //Cách 1

// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// const result = {}

// const listName = employees.map(item => item.name)

// listName.forEach((item, idx) => {
//     if(!result[item]) {
//         result[item] = []
//     }
//     result[item].push(employees[idx])
// })

// console.log(result)


//Bài tập 10

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// let MAX = employees[0].workingDays / employees[0].lateDays
// let indexMax = 0

// for (let i = 0; i < employees.length; i++) {
//     const element = employees[i]
//     const world = (element.workingDays / element.salary)
//     if (works > MAX) {
//         MAX = works
//         indexMax = i
//     }
// }

// console.log(MAX(employees))


//Bài tập 11

// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// const result = {}

// employees.forEach((item) => {
//     if(!result[item.workingDays]) {
//         result[item.workingDays] = 0
//     }
//     result[item.workingDays]++
// })

// console.log(result)

// Bài tập 12

// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];

// const result = employees.map(employees => ({
//     name: employees.name,
//     email: employees.email,
//     workInfo: {
//         workingDays: employees.workingDays,
//         lateDays: employees.lateDays
//     }
// }))

// console.log(result)

// Bài tập 13

let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];

// 1. Hàm thêm một công việc mới
function addTask(name, description) {
    tasks.push({ name: name, description: description, completed: false });
}

// 2. Hàm đánh dấu một hoặc nhiều công việc hoàn thành
function completeTasks(...taskNames) {
    tasks.forEach(task => {
        if (taskNames.includes(task.name)) {
            task.completed = true;
        }
    });
}

// 3. Hàm sắp xếp các công việc theo alphabet của tên công việc
function sortTasks(order = 'asc') {
    tasks.sort((a, b) => {
        if (order === 'asc') {
            return a.name.localeCompare(b.name);
        } else if (order === 'desc') {
            return b.name.localeCompare(a.name);
        }
    });
}

// Thử nghiệm các hàm
console.log("Danh sách công việc ban đầu:");
console.log(tasks);

addTask("Học React", "Học về component và state");
console.log("\nSau khi thêm một công việc mới:");
console.log(tasks);

completeTasks("Hoàn thành bài tập JavaScript", "Đi mua hàng");
console.log("\nSau khi đánh dấu hoàn thành một số công việc:");
console.log(tasks);

sortTasks('asc');
console.log("\nSau khi sắp xếp công việc A -> Z:");
console.log(tasks);

sortTasks('desc');
console.log("\nSau khi sắp xếp công việc Z -> A:");
console.log(tasks);
