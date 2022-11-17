import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output });

let product_list = {
    bread : {
        price:20,
        count:5
    },
    pen : {
        price:5,
        count:10
    }
}

let  user = [{
    name:"Yehor",
    age:10,
    bassket:{}
},
{
    name:"Kolya",
    age:21,
    bassket:{
    }
}]

//Promise async/await
async function addBasket(us){
    console.log(Object.keys(product_list))
    let product
    let buyer = us 
    return rl.question("Write what product you want to buy or Write PAY if you want paing  " , async (input)=>{
        if(input == "PAY"){
            return  pay(buyer)
        }
        if(product_list[input]){
            product = input
            console.log(`Price : ${product_list[input].price}`)
            return rl.question("Write count of product  " , async (input)=>{
                let coun = Number(input)
                if(product_list[product].count < coun){
                    console.log(`Sorry we have : ${product_list[product].count}`)
                    coun = product_list[product].count

                    buyer.bassket[product] = {
                        price : coun * product_list[product].price,
                        count : coun 
                    }
                    product_list[product].count -= coun
                    await addBasket(buyer)
                }else if(product_list[product].count == 0 ){
                    console.log("Sorry now we don't have this product")
                    await addBasket(buyer)
                }
                else{
                    buyer.bassket[product] = {
                        price : coun * product_list[product].price,
                        count : coun 
                    }
                    product_list[product].count -= coun
                    await addBasket(buyer)
                }
            })
        }else{
            console.log("Product not found")
            await addBasket(buyer)
        }
    })
}

async function login(){
    return rl.question("Write your login" , (input)=>{
        for(let i=0;i<user.length;i++){
            if(user[i].name == input){
                let us = user[i]
                return addBasket(us)
            }
        }
        console.log("Wrong login")
    })
}

async function pay(buyer){
    console.log(buyer)
    console.log(buyer.bassket)
    let sum = 0
    for(let key in buyer.bassket){
        console.log(key)
        sum+=buyer.bassket[key].price
    }
    return rl.question(`Please give ${sum}  `, async (input)=>{
        let giveSum = Number(input)
        if(sum<=giveSum){
            console.log(`Surrender : ${giveSum-sum}  `)
            await drop(buyer)
        }else{
            console.log("Give true sum")
            await pay(buyer)
        }
    })
}

async function drop(buyer){
    buyer.bassket = {}
    console.log(buyer.bassket)
    return rl.question("You want back a shop? Write BACK  ", (input)=>{
        if(input == "BACK"){
            return login()
        }else{
            return console.log("Thanks Bye")
        }
    })
}
login()



