console.log("hii i know ")

const password = 568;           // not changeable
let id = 34;                    // updatable
let email = "dimpal@gmail.com";
let name = "harshita";          // use let instead of var
let city = "jaipur";

let profit;                     // declared but not initialized so will print undefined

id = 2;                         //  updating only value, not redeclaring as let id =3
id = '5'                        //   will be updated as in js datatype is not def earlier after values is assigned

console.log([password, id, email, name, city, profit]);    

"use strict";                   // to enable modern JS features

// alert(3+3)                   // this won't work in Node.js, only browser

let age = 4;
let names="ayan"
let state = null

console.log([typeof age,typeof names,typeof state,typeof null,typeof undefined])   //null type is object 
                                                                    // type fo undefined is undefined
