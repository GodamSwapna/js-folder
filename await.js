// *async //await


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let is_shop_open=true;

let toppings_choice=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("which topping do you want");
        },3000);
    });
};

async function kitchen(){
    log
}





//  async function order(){
//      try{
//          await abc;
//      }
//      catch(error){
//          console.log("abc doesn't exist",error);
//      }
//      finally{
//          console.log("runs code anyway");
//      }
//  }

// order()
// .then(()=>{
//     console.log("hi hello");
// })













// *promises

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

//  let is_shop_open=false;


//  let order = (time,work)=>{
//      return new Promise((resolve,reject)=>{
//         if(is_shop_open){

//             setTimeout(()=>{
//                 resolve( work() )
//             },time)
            
//         }

//         else{
//             reject(console.log("Over shop is closed"))
//         }
//      })

//  }
//  order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//     return order(0000,()=>console.log("production has started"))
// })


// .then(()=>{
//     return order(2000,()=>console.log("the fruit was chopped"))
// })


// .then(()=>{
//     return order(1000,console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`))
// })


// .then(()=>{
//     return order(()=>console.log("start the machine"))
// })


// .then(()=>{
//     return order(2000,()=>{
//         console.log(`ice cream on holder ${stocks.holder[0]} `);
//     })
// })


// .then(()=>{
//     return order(3000,()=>{
//         console.log(`${stocks.toppings[0]} was selected`);
//     })
// })


// .then(()=>{
//     return order(1000,()=>console.log("ice cream was served"))
// })


// .catch(()=>{
//     console.log("Customer left");
// })


// .finally(()=>{
//     console.log("day ended ,the shop is closed");
// })









// *Callback hell


// let stocks={
//     Fruits:["strwaberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocalate","peanuts"]
// }


// let order=(Fruit_name,call_production)=>{
//     // console.log("order placed ,please call production");
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//         call_production();
//     },2000)
    
// };

// let production=()=>{
//     setTimeout(()=>{
//         console.log("production has started");
//         setTimeout(()=>{
//             console.log("the fruit has been chopped")
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                 setTimeout(()=>{
//                     console.log("start the machine");

//                     setTimeout(()=>{
//                         console.log(`${stocks.holder[0]} ice cream was placed on the cone`);

//                         setTimeout(()=>{
//                             console.log(`{stocks.topping[0]}`);
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//     },2000)
//     },0000)
//     // console.log("order recieved,starting production");

// };
// order(0,production)