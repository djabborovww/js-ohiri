// let a = 10;
// let b = 2;
// let x = a / b;

// try{
//     console.log(x);
// }
// catch (e){
//     console.error(e);  
// }



// let a = 10;
// let b = 2;
// let x = a / b;

// try{
//     console.log(x);
    
// }
// catch (e){
//     console.error(e);
// }
// finally {
//     console.log("doyim ishlaydi");
// }


// try {
//     const son1 = +window.prompt("Birinchi sonni kiriting");
//     const son2 = +window.prompt("Ikkinchi sonni kiriting");
//     if (son2 === || son1 === 0 ){
//         throw new Error("0 ga bolib bolmaydi");
//     }
//     if (isNaN(son1) || isNaN(son2)){
//         throw new Error("Iltimos son kiriting");
//     }

//     const natija = son1 / son2;
//     console.log(natija);
// }catch (error) {
//     console.error(error);
// }



// 5 ta misol

// try {
//     let result = 10 / 0;
//     console.log(result);
// } catch (error) {
//     console.log("Xato yuz berdi: " + error.message);
// }


//   function checkAge(age) {
//     if (age < 18) {
//       throw new Error("Yoshingiz 18 dan kichik, kirish mumkin emas");
//     }
//     console.log("Xush kelibsiz");
// }
  
//   try {
//     checkAge(16);
// } catch (error) {
//     console.log(error.message); 
// }



//   try {
//     let x = 10;
//     let y = 0;
//     let result = x / y; 
//     console.log(result);
// } catch (error) {
//     console.log("Xato: Nolga bo'lish mumkin emas");
// } finally {
//     console.log("Bu kod har holda ishga tushadi");
// }

// try{
//     let a = 20;
//     let b = 10;
//     let result = a / yield;
//     console.log(result);
// } catch () {
//     console.log(("misol tugri ishlaydi"));
    
// }

// try {
//     let a = 15;
//     let b = 10;
//     let result = a / b
//     console.log(result);
// } catch (error) {
//     console.log("Xato: onga bo'lish mumkin emas");
// } finally {
//         console.log("Bu kod har holda ishga tushadi");
// }