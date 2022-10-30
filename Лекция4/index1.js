import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rI = readline.createInterface({ input, output });
console.log("Input side of the square")

rI.on("line",(input)=>{
    if(input >1 && input<1000){
        let n = input
        console.log(`Perimeter: ${n*4}  Area: ${n*n}`)
    }else{
        console.log("Ыide should not be smaller 1 and larger 1000")
    }
})