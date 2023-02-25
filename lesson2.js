"use strict";

let obj1 = {
    "city" :  "Tashkent",
    "country" : "UZB",
    "currency" : "sum"
};
let str = "city"

function func1(obj, string){
    for (let item in obj){
        if (string == item){
            return true
        }
    }
    return false
};
console.log(func1(obj1, str)) //true