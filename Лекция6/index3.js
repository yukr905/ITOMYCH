let arr = [1,2,3,4,5]

function reduce(array, callback, initialValue) {
    let value = initialValue;
    for (const item of array) {
      value = callback(value, item);
    }
    return value;
};

console.log(reduce(arr,(prevValue, initialValue)=>{
    return  prevValue + initialValue
},0))