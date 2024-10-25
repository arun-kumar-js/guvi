// //Array and Array methods

// //funtion declarations
// function sayMyName() {
//   let value = "normal function";
//   return value; //sanjay
// }
// let name = sayMyName(); //sanjay
// console.log(sayMyName());
// console.log(name);

// //arrow functions
// let myNameFn = () => {
//   return "arrowfunction";
// };
// let arrowName = myNameFn();
// console.log(myNameFn());
// console.log(arrowName);

// const arr = [1, 2, 3, 4, 5];

// //arr methods
// console.log("----Array Push-----");
// //add a value at the last
// console.log("Before ", arr);
// arr.push(10, 11, 17); //add one or more value at the last index
// console.log("After", arr);

// console.log("----Array POP-----");
// //add a value at the last
// console.log("Before ", arr);
// // arr.pop();
// arr.pop(); //remove one value at the last index
// console.log("After", arr);

// console.log("----Array Unshift-----");
// //add a value at the last
// console.log("Before ", arr);
// arr.unshift(10, 11); //add one or more value at the first index
// console.log("After", arr);

// console.log("----Array Shift-----");
// //add a value at the last
// console.log("Before ", arr);
// arr.shift(); //remove one value at the first index
// console.log("After", arr);

// console.log("----Array Slice-----");
// console.log("original ", arr);
// let slicedArr = arr.slice(1, 5); //(startIndex, endIndex) returns an sliced array
// console.log("sliced", slicedArr);

// console.log("----Array Splice-----");
// //add a value at the last
// console.log("Before ", arr);
// arr.splice(2, 3, 6, 11, 12, 14); //(startindex, deleteCount, value1, value2, ...)
// console.log("After", arr);

//MRF (MAP, FILTER, REDUCE)
console.log("----------MRF----------");
console.log("------MAP------");
let mrfArr = [1, 2, 3, 4, 5, 6, 7];
// ()=>{}
let returenedArr = mrfArr.map((value, index, accArr) => {
  //returns an array
  console.log(`
value : ${value}
index : ${index}
actualArr : ${accArr}
`);
  return value * 2; //always returns an array
});
console.log(returenedArr);

console.log("--------------------------filter---------");
let filteredArr = mrfArr.filter((value, index, accArr) => {
  console.log(`
value : ${value}
index : ${index}
actualArr : ${accArr}
`);
  return value % 2 == 0; //returns true conditions for an array
});
console.log(filteredArr);

console.log("-------------reduce method--------");

let sumOfAllValues = mrfArr.reduce((acc, val, index, accArr) => {
  acc += index + " ";
  return acc;
}, "");
console.log(sumOfAllValues);

let studentsData = [
  { name: "student1", batch: "FSD-WE-11", marks: 90 },
  { name: "student2", batch: "FSD-WE-11", marks: 24 },
  { name: "student3", batch: "FSD-WE-11", marks: 50 },
  { name: "student4", batch: "FSD-WE-11", marks: 74 },
];
//passed students (chaining of MRF)
console.log("----Map example-----");
const result = studentsData
  .map((students) => {
    return students.marks + 10;
  })
  .filter((mark) => {
    return mark >= 40;
  })
  .reduce((acc, value, index) => {
    acc += value;
    return acc / (index + 1);
  }, 0);

console.log(result);
