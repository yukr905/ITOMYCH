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
    for(let i =0 ;i<2;i++){
            if(res.length>1){
                if(map.has(res[0]+res[1])){     
                    tmp += map.get(res[0]+res[1])
                    res =""
                }else{
                    tmp +=map.get(res[i])
                }
            }else{
                if(res[i]===undefined){
                    break
                }
                tmp +=map.get(res[i])
            }
    }
    for(let i =0 ;i<2;i++){
            if(res1.length>1){
                if(map.has(res1[0]+res1[1])){
                    tmp += map.get(res1[0]+res1[1])
                    res1= ""
                }else{
                    tmp +=map.get(res1[i])    
                }
            }else{
                if(res1[i]===undefined){
                    break
                }
                tmp +=map.get(res1[i])
            }
    }
    res=""
    console.log(tmp)
    while(tmp){
        for(let i = 0;i<map.size;i++){
            for(let key of map.keys()){
                if(tmp === 0){
                    break
                }
                if(tmp>=map.get(key)){
                    tmp= tmp -map.get(key)
                    res += key
                    break
                }      
            }
        }
    }
    console.log(`Result: ${res}`)
});

//res[0]+res[1] == "IV"||"IX"||"XL"||"XC"||"CD"||"CM"