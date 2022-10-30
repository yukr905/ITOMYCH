import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rI = readline.createInterface({ input, output });
console.log("Input a number from 10 to 99 or close if you want close program")
rI.on('line', (input) => {
    if(input >= 10 && input <= 99 || input ==="close"){
        if(input === "close"){
            console.log("program closed")
            return rI.close()
        }
        let res = input.split("").join(" ")
        console.log(`Result: ${res}`)
    }else{
        console.log("The number must be between 10 and 99")
    }
  });