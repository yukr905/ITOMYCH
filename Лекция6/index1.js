let A =[
    [5,4,3],
    [7,2,5]
] 
let B = [
    [7,9,8],
    [5,7,7],
    [1,8,2]
]

function mult(matrix1,matrix2){
    if(matrix1[0].length != matrix2.length){
        return "Matrix A and B not equel"
    }
    let C =  new Array(matrix1.length)
    for(let i =0;i<matrix1.length;i++){
        C[i] = new Array(matrix2.length)
    }
    let sum = 0
    for(let j = 0; j<matrix1.length;j++){
        for(let u = 0 ; u<matrix2.length;u++){
            sum = 0
            for(let i = 0 ;i<matrix2.length;i++){
                console.log(matrix1[j][i], matrix2[i][u])
                sum += matrix1[j][i]* matrix2[i][u]
            }
            C[j][u] = sum
            console.log("gggg")
        }
    }
    return C
}
console.log(mult(A,B))