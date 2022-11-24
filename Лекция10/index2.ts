const nerdamer = require("nerdamer")


function productOfTwoPolynomials(str1: string, str2: string): string {
  const result = nerdamer(`expand((${str1})(${str2}))`)
    .toString()
    .split('')
    .filter((s:string) => s !== '*')
    .join('')
  return result
}

console.log(productOfTwoPolynomials("x+1","x-1"))