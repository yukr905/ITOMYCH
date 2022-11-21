import {calculator} from './calculation.js'
import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output });

rl.question('Write example', (input) => {
  console.log(calculator(input))
  rl.close();
});