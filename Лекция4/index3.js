import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rI = readline.createInterface({ input, output });

function createBase(num1){
    return function(num){
        return  num+num1
    }
}
rI.on("line",(input)=>{
    let add = createBase(+input)
    console.log(add(10))
    console.log(add(21))
})

