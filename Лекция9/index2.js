import * as readline from 'readline'
import {  stdin as input, stdout as output } from 'process'
import { timetable } from './timetable.js';

const rl = readline.createInterface({ input, output })

async function readTerminalInput() {

  rl.question("Write day of the weak  " , (input)=>{
    console.log(timetable.find((daySchedule) => daySchedule.day === input.toLowerCase()))
    rl.question("If you want EXIT write EXIT  " , (input)=>{
      if(input == "EXIT"){
        return console.log("By")
      }else{
        readTerminalInput()
      }
    })
  })
}
readTerminalInput()