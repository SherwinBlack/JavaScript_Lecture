// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var a = "Hello, Javascript";
// var b = 10;

// console.log(a);
// console.log(b);

// function example() {
    
//    if (true) {
//       let a = 20;
//        console.log(a);
//    }

// //}
// example();

// hoisting with var can lead to unexpected result
// var a = 10;
// var b = a;
// console.log(b);


// console.log(a);
// let name = "John";
// let name1 = " Doe";

// console.log(name + name1);

// for (let i = 0; i < 5; i++) {
//    setTimeout (()=>{
//        console.log(i);
//    }, 1000);
// }

// let variable_name =value;

// {
//    let num = 10;
//    console.log(num);
// }

// console.log(num);

// function fun () {
//    let a =10;
//    console.log(a);
// }

// fun();
// console.log(a);

// let num =10;
// console.log(num);

// function fun () {
//    console.log(num);

// }

// fun();

// let x = 10;
// {
//    let x = 20;
//    console.log(x);
// }

// console.log(x);

// x = 10;

// console.log(x);
// let x;

// let x = 10;
// x = 20;
// x += 30;

// console.log(x);
// let x;
// if (true) {
//      x =10;
//     console.log(x);

// }
// console.log(x);


// const x = 10;
// console.log(x);

// const y;
// y = 20;
// console.log(y);


//const x = 10;
// console.log(x);

// let x = 20;



// let num = 10; // global variable

// function fun () { 
//     let num = 20; // local variable or shadowing the global variable
//     console.log(num);
// }

// fun();
// console.log(num);

// let name = "Jonh";//global variable
// if (true) {
//     let name = " Doe"// shadowing the global variable
//     console.log(name);
// }

// console.log(name );



// const x = 10;
// if (true) {
//      const x = 20; // 
//      console.log(x);

// }
// console.log(x);




// var globalVar ="I am global Var";
// var globalLet = "I am global let Var";
// const globalConst ="I am global const Var";

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(window.globalVar);
// console.log(window.globalLet);
// console.log(window.globalConst);


// function fun () {
//     var localVar = "I am a Local Variable";
//     let localLet = "I am a Local Let Variable";
//     const localConst = "I am a Local Const Variable";
//     console.log(localVar);
//     console.log(localLet);
//     console.log(localConst);
// }
// fun();
//{
// let blockLet = "I am a block let variable";
// const blockConst = " I am block const variable";
// var blockVar= "I am block var variable";

// console.log(blockLet);
// console.log(blockConst);

// }
// console.log(blockLet);
// console.log(blockConst);
// console.log(blockVar);

// var a = 10;
// var a = 20;
 
// let b = 10;
// let b= 20;

// const c = 10;
// const c = 20;


// const obj = {name: "John"};
// obj.name ="Doe";
// console.log(obj.name);

// const arr = [1, 2, 3, 4, 5];
// arr [2] = 10
// console.log(arr)

// obj = {age:25};
// arr = [500, 600, 700];



// Objext.freeze() method // no adding/deleting new properties

// const person = {
//     name: " John",
//     age:25
// };
// Object.freeze(person);
// console.log(person.name);

// person.name ="Doe";
// console.log(person.name);

// person.city = (person.city);
// console.log(person.city);

// delete person.age;
// console.log(person.age);

// Object.seal(person)

// person.name ="Doe";
// console.log(person.name);

// person.city = (person.city);
// console.log(person.city);

// delete person.age;
// console.log(person.age);

// Object.preventExtensions(person);

// person.name ="Doe";
// console.log(person.name);

// person.city = "new york";
// console.log(person.city);

// delete person.age;
// console.log(person.age);

// let num = 10;
// let num2 = 20.5;
// let num3 = -3;

// console.log(typeof num);

// //special number

// console.log(1/0);
// console.log(-1/0);
// console.log("Hello" * 2);



let str1 = "hello world of javasript";
let str2 = "Hi madlang people";
let str3 = "Hey Axel Dan torren";

console.log(typeof str2);

//string concatenation

let fname ="Dan";
let lname ="Torren";
let fullname = fname+ " " + lname;
console.log(fullname);

//string interpolation

let age =25;
console.log(`Hello, ${fname} ${lname}. You are ${age} years old.`);