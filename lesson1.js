"use strict";
let obj1 = {
    "city" :  "Tashkent",
    "country" : "UZB",
    "curency" : "sum"
}
function func(obj){
    for (let item in obj){
        if (obj.hasOwnProperty(item)){
            console.log(`${item}: ${obj[item]}`)
        }
    }
}
func(obj1);