// interface User{
//     name: string;
//     age:number
//     email:string
// }
// let user : User={
// name:"Jentra",
// age:31,
// email:"salomdunyo@gamil.com"
// }
// console.log(user);



// function Qoshish(a:number, b:number):number{
//     return a+b;
// }
// console.log(Qoshish(5, 6));


// enum HaftaKunlari {Dushanba, Seshanba, CHorshanba,Payshanba,Juma,shanba,Yakshanba}
// let c: HaftaKunlari = HaftaKunlari.Dushanba; 
// console.log(c);



// function getArrayLength<P>(array: P[]):number{
//     return array.length;
// }
// console.log(getArrayLength([1,2,3,3,3,3,3,33,]));



// type Status = 'start' | 'stop';
// let myStatus: Status;
// myStatus = 'start'; 
// myStatus = 'stop'; 



// interface Dog {
// bark:boolean
// }
// interface Cat{
//     meow:boolean
// }
// type Pet  = Dog|Cat

// const Pet :Pet  = {
//     bark:true,
//     meow:false
// }

// console.log(Pet);



// function Nimadir(input:string|number):string|number{
//     if(typeof input==='string'){
//         return input.toUpperCase()
//     }
//     else if(typeof input === 'number')
//     {
//         return input ** 2;
//     }
//     return input;
// }
// console.log(Nimadir("salom"));
// console.log(Nimadir(5));



// class Car {
//     brand: string;
//     year: number;

//     constructor(brand: string, year: number) {
//         this.brand = brand;
//         this.year = year;
//     }

//     nomsiz(brand: string, year: number) {
//         this.brand = brand;
//         this.year = year;
//     }
//     nimadir():void{
//         console.log(`${this.brand},${this.year}`);
        
//     }
// }
// const moshina = new Car("Gentra",2025)
// moshina.nimadir()



// interface Product{
//     name:string
//     price?:number
//    readonly id:number
// }
// const produt:Product={
//     name:"Non",
//     price:3000,
//     id:10
// }
// console.log(produt);



// let userInfo:[number,string]=[25,"Bekzod"]
// console.log(userInfo[0]);
// console.log(userInfo[1]);


  