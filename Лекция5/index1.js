import * as readline from 'readline'
import {  stdin as input, stdout as output } from 'process'

const rI = readline.createInterface({ input, output });

let b =0
let obj ={}
let obj1 = {
    name:"Borys",
    age:27,
}
let obj2 = {
    name : "Borys",
    age:26,
}

function empty(obj){
    if(typeof(obj) !== "object"){
        return console.log("Not object")
    }
    let key = Object.keys(obj)
    if(key.length == 0 ){
        return " Object is empty"
    }else{
        return `Object have ${key.length} key`
    }
}

function equel(obj1, obj2){
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
        return "Object is equel "
    }else{
        return "Object not equel"
    }
}

function belong(obj1, obj2) {
    let res = {};
    for (const key in obj1) {
      const val1 = obj1[key];
      const val2 = obj2[key];
    
      if (val1 == val2) {
        res[key] = val1;
      }
    }
    return res;
  }

function findValues(obj2){
    console.log("Write key which need find")
    rI.on("line" , (input)=>{
        if(obj2[input]){
            console.log(obj2[input])
        }else{
            console.log(`Key ${input} not found`)
        }
    })
}

console.log(empty(obj))
console.log(equel(obj1, obj2))
console.log(belong(obj1,obj2))

findValues(obj2)