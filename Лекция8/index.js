import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output });

let res = 0

async function getRandom() {
    return Math.floor(Math.random() * (7 - 1) + 1);
}

async function calculation(){
    return rl.question("write a number from 1 to 6 . If you want to end the game write EXIT  ", async (input) => {
        console.log(`Your score : ${res}`)
        if (input == "EXIT") {
            return console.log(`Your result : ${res}`);
        }
        const num = Number(input)
        const randomNumber = await getRandom()
        if (1 <= num && num <=6) {
            console.log(num)
            if(num == randomNumber){
                res +=2
                await calculation()
            }else if( num+1 == randomNumber|| num-1 == randomNumber){
                res += 1
                await calculation()
            }else{
                await calculation()
            }
        } else {
            console.log("Wrong input");
            await calculation()
        }
    })
}

calculation()