// class Hayvonlar {
//     tirik = true

//     yemoq () {
//         console.log(`Bu ${this.name} oziqlanadi`)
//     }
//     uxlamoq(){
//         console.log(`Bu ${this.name} uxlaydi`)
//     }
// }

// class Quyon extends Hayvonlar{
//     name = "Quyon"

//     yugur () {
//         console.log(`Bu ${this.name} yuguroladi`)
//     }
// }
// class Baliq extends Hayvonlar{
//     name = "Baliq"
//     suzish () {
//         console.log(`Bu ${this.name} suzoladi`)
//     }
// }

// class Ukki extends Hayvonlar{
//     name = "UKki"
//     uchish () {
//         console.log(`Bu ${this.name} ucholadi`)
//     }
// }


// const quyon = new Quyon()
// const baliq = new Baliq()
// const ukki = new Ukki()

// quyon.uxlamoq()
// quyon.yugur()
// baliq.yemoq()
// baliq.suzish()
// console.log(ukki.tirik)
// ukki.uchish()




// 5 ta misol

// class Hayvon {
//     constructor(ismi) {
//         this.ismi = ismi;
//     }
    
//     ovozChiqar() {
//         console.log(`${this.ismi} ovoz chiqarmoqda.`);
//     }
// }

// class It extends Hayvon {
//     ovlash() {
//         console.log(`${this.ismi} ovlamoqda.`);
//     }
// }

// let it = new It("Rex");
// it.ovozChiqar();
// it.ovlash();




// class Mashina {
//     yur() {
//         console.log("Mashina harakatlanmoqda.");
//     }
// }

// class ElektrMashina extends Mashina {
//     yur() {
//         console.log("Elektr mashina jim yurmoqda.");
//     }
// }

// let tesla = new ElektrMashina();
// tesla.yur();



// class Shaxs {
//     constructor(ism, yosh) {
//         this.ism = ism;
//         this.yosh = yosh;
//     }

//     tanishtir() {
//         console.log(`Salom, mening ismim ${this.ism}.`);
//     }
// }

// class Talaba extends Shaxs {
//     constructor(ism, yosh, maktab) {
//         super(ism, yosh);
//         this.maktab = maktab;
//     }

//     tanishtir() {
//         super.tanishtir();
//         console.log(`Men ${this.maktab} oquvchisiman.`);
//     }
// }

// let talaba = new Talaba("behruz", 13, "2 maktab");
// talaba.tanishtir();




// class Qurilma {
//     constructor(nomi) {
//         this.nomi = nomi;
//     }

//     ishgaTushir() {
//         console.log(`${this.nomi} ishga tushmoqda.`);
//     }
// }

// class Telefon extends Qurilma {
//     constructor(nomi, model) {
//         super(nomi);
//         this.model = model;
//     }

//     qongiroqQil() {
//         console.log(`${this.nomi} (${this.model}) qo‘ng‘iroq qilmoqda.`);
//     }
// }

// let samsung = new Telefon("Samsung", "Galaxy S21");
// samsung.ishgaTushir();
// samsung.qongiroqQil(); 




// class Texnika {
//     ishla() {
//         console.log("Texnika ishlamoqda.");
//     }
// }

// class Kompyuter extends Texnika {
//     dasturYukla() {
//         console.log("Kompyuterga dastur yuklanmoqda.");
//     }
// }

// class Noutbuk extends Kompyuter {
//     batareykaTekshirish() {
//         console.log("Noutbukning batareykasi tekshirilmoqda.");
//     }
// }

// let noutbuk = new Noutbuk();
// noutbuk.ishla();
// noutbuk.dasturYukla();
// noutbuk.batareykaTekshirish();
