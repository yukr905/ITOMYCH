import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'


const rI = readline.createInterface({ input, output });
let map = new Map()
let count = 0
let res = ""
let result = []
map.set("M",1000)
map.set("D",500)
map.set("C",100)
map.set("L",50)
map.set("X",10)
map.set("V",5)
map.set("I",1)
console.log("Input M D C L X V I")
rI.on('line', (input) => {
    count = 0
    for(let i = 0;i<input.length;i++){
        if(map.has(input[i])){
            count++
            result.push(map.get(input[i]))
            if(count >2){
                return console.log("Only 2 numbers")
            }
            if(count == 2){
                let A,B,tmp = 0
                A = result[0]
                B = result[1]
                res=" "
                tmp = A+B
                for(let i = 0;i<map.size;i++){
                    for(let key of map.keys()){
                        if(tmp>=map.get(key)){
                            tmp= tmp -map.get(key)
                            res += key
                        }      
                    }
                }
            }
        }
    }
    console.log(`Result: ${res}`)
});