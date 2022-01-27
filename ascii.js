



// *const keywordate nd upd
// const can not the  redecler and update the value"
// const founderOfNavgurukul = "Kayak"
// console.log(founderOfNavgurukul);


// let fruit='mango';
// let fruit = 'orange';
// console.log(fruit)
 



// let name = 'rose';
// {
// let name = 'pihu';
// console.log(name)
// }
// console.log(name)
 



//* local scope 
// let myCampus = "Navgurukul Dharamshala Campus";
// myCampus = "Navgurukul Sarjapur Campus";
//* we can update the variabl/e
// console.log(myCampus);

//* redecler varable throught let it is throw erro
// let myCampus = "Navgurukul Dharamshala Campus";
// let myCampus = "Navgurukul Sarjapur Campus";
// console.log(myCampus);


// var place = 'bangalore';
// function gimplace(){
// var place = 'pune';
// console.log(place)
// }
// console.log(place)
// gimplace()

// {
//     let num=10;
//     console.log(num);
//  }
//  console.log(num);
 

// const x=6%3;
// const y=x?'one':'two';
// console.log(y);

// var fruit = 'apple';
// {
// var fruit = 'orange';
// console.log(fruit)
// }
// console.log(fruit)



// let word="MISSISSIPPI" ;
// let newobj={};
// // let count=0;
// for(let i of word){
//     if(!i.includes(newobj)){
//         let count=0;
//         for(let j of word){
//             if(i==j){
//                 count+=1
//             }
//             newobj[i]=count
//         }
//     }
    // console.log(i);
// }
// console.log(newobj);



// // valu is present or not
// let array=[
//     {"first":"1"}, 
//     {"second": "2"}, 
//     {"third": "1"}, 
//     {"four": "5"}, 
//     {"five":"5"}, 
//     {"six":"9"},
//     {"seven":"7"}
// ];
// // Output :-[2', '7', '9', '5', '1']
// let newArry=[];
// for(let i of array){
//     for(j in i){
//         if(!newArry.includes(i[j])){
//             newArry.push(i[j])
//         }
//     }
// }
// console.log(newArry);




// // *self Invoking functon /imediatly Invoked function expression

// (function (num1,num2){
//     console.log(num1+num2);
//     // I will call myself
// }("my name is"," Swapna"))


// var isEqual = function(str1,str2){
//     console.log(str1===str2)
//  }
//  isEqual("kumar","nayak");
 
 




// *function Expression /Anonymous function
// let n=require("readline-sync");
// let choose_ascii=(n.question("enter number: "));
// var ascii_char=95+choose_ascii
// var num=function(num1,num2) {
//     return num1, num2;
// };
// console.log(num( choose_ascii,ascii_char));






// var mainString="My name is kumar, and my friend’s name is Dhamu";
// var subString="is";
// var array=mainString.split(" ");
// // let array1=mainString.replace("",'')
// let countSubString=0
// for (str of array ){
//     if(str==subString){
//         countSubString+=1
//     }
//     // console.log(str);
// }
// console.log("the number of substrings ", countSubString,"in the sentence")
// console.log(array);
// Output:
// The substring is there 2 times in the main string.





// let number1=require("readline-sync");
// let num=number1.question("enter a number: ");
// let newObject={};
// for (let i=1;i<=num;i++){
//     newObject[i]=i**2
// }
// console.log(newObject);


// var d1 = {'a': 100, 'b': 200, 'c':300}
// var d2 = {'a': 300, 'b': 200, 'd':400}
// // Sample output: {'a': 400, 'b': 400, 'd': 400, 'c': 300}
// for(let key in d1){
//     for(let key1 in d2){
//         if(key==key1){
//             d1[key]=d1[key]+d2[key1]
//         }
//         else{
//             if(d1.hasOwnProperty(key1)==false){
//                 d1[key1]=d2[key1]
//             }
//         }
//     }
// }
// console.log(d1)