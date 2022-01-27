// *Arrow function

let name=(myName)=>{
   console.log(`my name is ${myName} `);
}
name('godam-swapna');



// *spread operator

// var myName="kumar";
// let newObj={...myName};
// let object={name:'swapna',age:21}
// newObj1=Object.assign({},newObj,object);
// // console.log(newObj1);
// console.log(`my name is ${object['name']}`);
// console.log({...myName})


//Cleaning up repeated elements from an array with a spread operator
// let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
// let mySet = new Set(array1);
// myNewArray = [...mySet]
// console.log(myNewArray)
//[ 1, 2, 3, 4, 6 ]



// Without a spread operator
// var myName="kumar"
// var array1=myName.split("")
// //with a spread operator
// array2=[...myName];
// console.log(array2) // output: [ 'k', 'u', 'm', 'a', 'r' ]
 


// concatenating without a spread operator
// let arr1 = [1,2,3];
// let arr2 = [5,7];
// arr = arr1.concat(arr2);
// arr3=[...arr1,...arr2];
// console.log(arr3);
// console.log(arr); //[ 1, 2, 3, 5, 7 ]


// let arr =[1,2,3];
// let letters=[...arr];
// letters.push('swapm`1a');
// console.log(letters);
// console.log(arr);
// // console.log(leter);





// *callback function

// function callback(){
//    console.log("hi from callback after 1 second")
// }
 
// setTimeout(callback, 1000)
 
// // Let’s see how setTimeout works if you give JavaScript another task to complete:
 
// const tenSecondsLater = () => console.log('10 seconds passed!')
 
// setTimeout(tenSecondsLater, 10000)
// console.log('Start!')


 
// let add = function(num1,num2){
//     return num1+num2;
//  }
  
//  let multiply= function(num1,num2){
//     return num1*num2;
//  }
  
//  let calc= function (num1,num2,callback){
//     console.log(callback(num1,num2));
//  }
  
//  calc(2,3,add);
//  calc(2,3,multiply);
 
// function Gurukul(){
//     console.log("I am Navgurukul");
//  }
  
//  function Nav(swapna){
//     swapna();
//     console.log("I am Nav");
//     // callback();
//  }
  
//  Nav(Gurukul);  //I am Nav I am Navgurukul
  
 





// let funct=(fn)=>{
//     return fn('my name is','swapna');
// }

// let myInfo=(arg1,arg2)=>{
//     return arg1+" "+arg2;
// }
// let result=funct(myInfo);
// console.log(result);




// let first=require("readline-sync");
// let num1=first.questionInt("Enter a number1 ");
// let num2=first.questionInt("Enter a number2 ");
// let sym=first.question("Enter any symbol ")
// switch(sym){
//     case "+":
//         console.log("Addition of two numbers ",num1+num2)
//         break;
//     case "-":
//         console.log("Substraction  of two numbers ",num1-num2)
//         break;
//     case "*":
//         console.log("Multiplication of two numbers ",num1*num2)
//         break;
//     case "%":
//         console.log("Division of two numbers ",num1%num2)
//         break;
// }


// *months code in switch case

// let first=require("readline-sync");
// let code=first.question("Enter month serial Number ")
// switch(code){
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "8":
//     case "10":
//     case "12":
//         console.log("The number of days in month is 31");
//         break;
//     case "4":
//     case "6":
//     case "9":
//     case "11":
//         console.log("th number of day in month is 30");
//         break;
//     case "2":
//         let second = require("readline-sync");
//         let year1 =second.questionInt("ente a year ");
//         let year =year1%4;
//         switch(year){
//             case 0:
//                 console.log(("it is a leap year the number of days is 28"));
//                 break;
//             default:
//                 console.log("it is a normal year the number of days in month is 29");
//                 break;
//         }

// }



// *Destucturing

// let det={
//     name:"swapna",
//     sirName:"Godam"
// };
// let personalInfo={contactNum:612348978,
//                 age:21,
//                 qualification:"BSc"  }
// // ({name,sirName}=det);
// // const {name,sirName}=det;
// let info={...det,...personalInfo};
// console.log(info);
// console.log(name,sirName);

// combeine two objects in single objects

// var silverScreenDetails={name:"Chiranjeevi",tag:"super star"}
// var realLifeDetails={realName:"Konidela siva prasad",tag:"Mega star"}
 
// var allActors={...silverScreenDetails,...realLifeDetails}
// console.log(allActors);


// var numbers = [1, 2, 6, 8, 12, 14];
// var result = numbers.filter(element => element>5)
// console.log(result);


// var arr = [10,7,34,2,09,23,08,80];
// var newList=arr.filter(num => num>=10);
// console.log(newList);


// var Fruits = [ "apple", "mango","grapes","strawberry","orange"]
// // let vowel=['a','e','i','o','u','A','E','I','O','U'];
// let str="aeiouAEIOU"
// // let result=Fruits.filter(elements => elements[0]);
// for(let letter of Fruits){
//     // console.log(letter[0]);
//     if(!letter[0].includes(str)){
//         // console.log(letter);
//         break;
//     }
//     console.log(letter);
// }
// console.log(result);


// var Arr = [34,54,56,78,43,87,09];
// let num=0;
// for(let i of Arr){
//     let num1=i.toString();
//     let num2=num1.split();
//     let num3=num2.reverse();
//     let num4=num3.join("");
//     console.log(num3);
    // let num2=;
    // let num2=i%10;
    // console.log(num2);
    // console.log(typeof(num1))
// }

// function reverseString(str) {
//     let string=str.split("");
//     let revstr=string.reverse();
//     let newstr=revstr.join("");
//     return newstr;

// }
// console.log(reverseString("hello"));