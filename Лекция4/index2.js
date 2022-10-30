function multiply(num1,num2){
    let res = num1*num2
    console.log(res)
    return function(num){
        console.log(num*2)
        return function(num){
            return Math.pow(num,2)
        }
    }
}
let double = multiply(5,10)
let square = double(6)
console.log(square(9))