let arr = [1,2,2,3,3,3]


function uniq(arr){
    let newarr = []
    for(let element of arr){
        if(!newarr.includes(element)){
            newarr.push(element)
        }
    }
    return newarr
}
console.log(uniq(arr))