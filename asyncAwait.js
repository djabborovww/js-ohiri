// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true
//             if (dogWalked) {
//                 resolve("Kuchukcha bilan aylandim 🐩");
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
//                 resolve("Oshxonani tozaladim 🧼");
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
//                 resolve("Axlatlarni olib chiqdim 🗑");
//             } else {
//                 reject("Axlatlarni olb chiqish xohlamadim");
//             }
//         }, 3000);
//     });
// }

// async function main() {
//     try {
//         const dogWalked = await walkDog();
//         console.log(dogWalked);
//         const kitchenCleaned = await cleanKitchen();
//         console.log(kitchenCleaned);
//         const trashTakenOut = await takeOutTrash();
//         console.log(trashTakenOut);
//     } catch (error) {
//         console.error("Xato:", error);
//     }
// }
// main();




// 5ta misol


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

// async function main() {
//     try {
//         const ovqatyeyish = await ovqatlanish();
//         console.log(ovqatyeyish);
//         const idishlarYvaman = await idishlarniYuvish();
//         console.log(idishlarYvaman);
//         const vazifa = await dars();
//         console.log(vazifa);
//     } catch (error) {
//         console.error("Xato:", error);
//     }
// }
// main();




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

// async function main() {
//     try {
//         const kitob = await kitobOlish();
//         console.log(kitob);
//         const dars = await vazifa();
//         console.log(dars);
//     } catch (error) {
//         console.error("Xato:", error);
//     }
// }
// main();



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


// async function main() {
//     try {
//         const dogWalked = await walkDog();
//         console.log(dogWalked);
//         const kitchenCleaned = await cleanKitchen();
//         console.log(kitchenCleaned);
//         const trashTakenOut = await takeOutTrash();
//         console.log(trashTakenOut);
//     } catch (error) {
//         console.error("Xato:", error);
//     }
// }
// main();



// function uxlash(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//         const dam = true
//         if (dam) {
//             resolve("10 da uxlashikm kk");       
//         }else {
//             reject("uxlagim kelmadi")
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

// async function main() {
//     try {
//         const dam = await uxlash();
//         console.log(dam);
//         const dars = await vazifa();
//         console.log(dars);
//     } catch (error) {
//         console.error("Xato:", error);
//     }
// }
// main();