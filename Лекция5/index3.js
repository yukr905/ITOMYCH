let circle = {
    x:0,
    y:0,
    r:5
}
let point = {
    x:3,
    y:3
}

function pointInCircle(circle,point){
    let dist = Math.sqrt((Math.pow((point.x - circle.x),2)+Math.pow((point.y - circle.y),2)))
    if(dist<=circle.r){
        return true
    }else{
        return false
    }
}

console.log(pointInCircle(circle,point))