// function bir (){
//     setTimeout(()=>{
//         console.log(1);       
//     },3000)
// }

// function ikki(){
//     console.log(2);
// }

// bir()
// ikki()





// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kuchukcha bilan aylandim");
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Oshxonani tozaladim");
//         }, 2000);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Axlatlarni olib chiqib tashdim");
//         }, 3000);
//     });
// }

// walkDog()
//     .then(value => {
//         console.log(value);
//         return cleanKitchen();
//     })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash();
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.error("Xato bor:", error);
//     })
//     .finally(() => {
//         console.log("Vazifalarni bajardim");
//     });



// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true
//             if (dogWalked) {
//                 resolve("Kuchukcha bilan aylandim");
//             } else {
//                 reject("Kuchukcha aylanish xohlamadi");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;
//             if (kitchenCleaned) {
//                 resolve("Oshxonani tozaladim");
//             } else {
//                 reject("Oshxonani tozalash yoqmadi");
//             }
//         }, 2000);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = false;
//             if (trashTakenOut) {
//                 resolve("Axlatlarni olib chiqdim");
//             } else {
//                 reject("Axlatlarni olb chiqish xohlamadim");
//             }
//         }, 3000);
//     });
// }

// walkDog()
//     .then(value => {
//         console.log(value);
//         return cleanKitchen();
//     })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash();
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.error("Xato:", error);
//     })
//     .finally(() => {
//         console.log("Vazifalarni bajardim");
//     });




// 5ta misol



// function vazifa (){
//     setTimeout(()=>{
//         console.log("darslarni qilishim kk");       
//     },1000)
// }

// function uygaBorish (){
//     setTimeout(()=>{
//         console.log("4 da uyga ketishim kk");
//     },1500)
// }


// vazifa()
// uygaBorish()


// function kitobOlish(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         const kitob = true
//         if (kitob) {
//             resolve("kitob sotib olishim kk");       
//         }else {
//             reject("kitob olmadim")
//         }
//       },1500)  
//     })
// }
// function vazifa(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dars = true
//             if (dars) {
//                 resolve("darslarni bajarishim kk")
//             } else {
//                 reject("drsqilish xoxlamadim")
//             }
//         }, 1000)
//     })
// }   

// kitobOlish().then(value => {
//     console.log(value);
//     return vazifa();
// })
// .then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.error("xato bor:", error)
// })
// .finally(() => {
//     console.log("vazifalar bajarildi");   
// })


// function ovqatlanish() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const ovqatyeyish = true
//             if (ovqatyeyish) {
//                 resolve("6 da ovqat lanishi8m kk")
//             } else {
//                 reject("ovqat yeyishni xoxlamadim")
//             }
//         },500)
//     })
// }
// function idishlarniYuvish() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const idishlarYvaman = true
//             if (idishlarYvaman) {
//                 resolve("ovqatlangandan keyin idishlarni yuvaman")
//             } else {
//                 reject("idishlarni yuvishni xoxlamadim")
//             }
//         },400)
//     })
// }
// function dars() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const vazifa = true
//             if (vazifa) {
//                 resolve("vazifalarni qilishim kk")
//             } else {
//                 reject("vazifa qilish yoqmadi")
//             }
//         },1000)
//     })
// }


// ovqatlanish().then(value => {
//     console.log(value);
//     return idishlarniYuvish();
// })
// .then(value => {
//     console.log(value);
//     return dars();
// })
// .then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.error("xato bor:", error)
// })
// .finally(() => {
//     console.log("vazifalar bajarildi");   
// })



// function mkBorish (){
//     setTimeout(()=>{
//         console.log("ertalab darsga borish");       
//     },1000)
// }
// function aylanibKelish (){
//     setTimeout(()=>{
//         console.log("kechga kuchaga chiqish");
//     },1500)
// }

// mkBorish()
// aylanibKelish()



// function telfonKorish (){
//     setTimeout(()=>{
//         console.log("ertalab telfon korish");       
//     },1000)
// }
// function aylanibKelish (){
//     setTimeout(()=>{
//         console.log("kechga kuchaga chiqish");
//     },1500)
// }

// telfonKorish()
// aylanibKelish()
