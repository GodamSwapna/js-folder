// some important methods in javascript

// *find method it finds the first element of the array once it is satisfy the condition
// it stop the loop there

var number = [2, 4, 6, 8, 12, 14];
let greatNum=number.find(element => element>9);
console.log(greatNum);

// *Reduce Method

var number = [2, 4, 6, 8, 12, 14];
 
// Normal Way
var sum = number.reduce((total,element)=>total+element)
console.log(sum);


// function multiply(x,y){
//     return x*y;
// }
// function square(n){
//     return multiply(n,n);
// }
// function squareNum(n){
//     return square(n);
// }

// let printNum=squareNum(5);
// console.log(printNum);

// const myArray = [1, 2, 3, 4, 5]
// let result =myArray.map(x => x * x).reduce((total, value) => total+value)
// console.log(result);


// *difference between map and foreach

// const myFriends= ["Shweta","komal","jyoti","chauhan"]
// var result= myFriends.forEach((e) => e)
// console.log(result);
// let numbers = [1, 2, 3, 4];
// var result=numbers.map((val, index) => val * val);
// console.log(result);
// console.log(numbers);



// *map method
// let myMarks=[1,4,6,8,9,7];
// let num=myMarks.map((e)=>console.log(e*2))

// *forEach method

// let numbers = [1, 2, 3, 4];
// var result=numbers.forEach((val, index) => numbers[index] = val * val);
// console.log(result);
 


// let array=[1,2,3,4,5,6,7,];
// let num=array.forEach((e,index) => console.log(e,index));//By using arrow function
// console.log(num);
//by using normal function
// array.forEach(function(e){
//     console.log(e);
// })