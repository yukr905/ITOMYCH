import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rI = readline.createInterface({ input, output });
let map = new Map()
let pos = 0
let res=""
let tmp =0
let result = []
let res1 = ""
map.set("M",1000)
map.set("CM",900)
map.set("D",500)
map.set("CD",400)
map.set("C",100)
map.set("XC",90)
map.set("L",50)
map.set("XL",40)
map.set("X",10)
map.set("IX",9)
map.set("V",5)
map.set("IV",4)
map.set("I",1)
console.log("Input M D C L X V I")
rI.on('line', (input) => {
    res=""
    res1=""
    result.length = 0
    for(let i = 0;i<input.length;i++){
        if(map.has(input[i]) || input[i] ==="+"){
            result.push(input[i])
        }
    }
    for(let i =0;i<result.length;i++){
        pos =result.indexOf("+")
        if(i<pos){
            res += result[i]
        }else if(pos<i){
            res1 += result[i]
        }
    }
    tmp = map.get(res)+map.get(res1)
    res=""
    for(let i = 0;i<map.size;i++){
        for(let key of map.keys()){
            if(tmp>=map.get(key)){
                tmp= tmp -map.get(key)
                res += key
            }      
        }
    }
    console.log(`Result: ${res}`)
});