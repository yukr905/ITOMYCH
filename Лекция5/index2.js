let circle = {
    x:0,
    y:0,
    r:9
}

let circle1 ={
    x1:10,
    y1:10,
    r1:6
}

function calculate(circle){
    let area = Math.PI * Math.pow(circle.r,2)
    let per = Math.PI *circle.r*2
    return `S : ${area}  P : ${per}`
}
console.log(calculate(circle))

function  belong(circle,circle1){
    const {x,y,r} = circle
    const {x1,y1,r1} = circle1
    let dist = Math.sqrt(Math.pow((x - x1),2) + Math.pow((y - y1),2))
    if(dist > r + r1 || x == x1 && y == y1 ){
        return "Circle and circle1 not belong"
    }else{
        let f1 = Math.acos((r * r + dist * dist - r1 * r1)/(2 * r * dist))*2
        let f2 = Math.acos((r1 * r1 + dist * dist - r * r)/(2 * r1 * dist))*2
        let area1 = 0.5 * f2 * (r1*r1) - 0.5 *(r1*r1) * Math.sin(f2)
        let area2 =  0.5 * f1 * (r*r) - 0.5 * (r*r) * Math.sin(f1)
        return  `belong S : ${area1 + area2} `
    }
}


  



console.log(belong(circle,circle1))