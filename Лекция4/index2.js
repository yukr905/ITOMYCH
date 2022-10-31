function multiply(num1,num2){
    return num1*num2
}
function double(func){
    return func*2
}
function square(func){
    return Math.pow(func,2)
}
console.log(double(multiply(5,5)))
console.log(square(multiply(4,3)))
