class Reactangle{
    #name = "Rectangle"
    constructor(x1,y1,x2,y2,x3,y3,x4,y4){
        this.x1 = x1
        this.x2 = x2
        this.x3 = x3
        this.x4 = x4
        this.y1 = y1
        this.y2 = y2
        this.y3 = y3
        this.y4 = y4
    }
    isRectangle(){
        this.side1 = Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2))
        this.side2 = Math.sqrt(Math.pow((this.x3-this.x2),2)+Math.pow((this.y3-this.y2),2))
        this.side3 = Math.sqrt(Math.pow((this.x4-this.x3),2)+Math.pow((this.y4-this.y3),2))
        this.side4 = Math.sqrt(Math.pow((this.x4-this.x1),2)+Math.pow((this.y4-this.y1),2))
        if(this.side1 == 0 || this.side2 == 0 || this.side3 == 0 || this.side4 == 0){
            return false
        }
        if(this.side1 == this.side3 && this.side2 == this.side4){
            return true
        }else{
            return false
        }
    }
    get perimetr(){
        return  `${this.#name} perimetr : ${2*(this.side1 + this.side2)}`
    }
    get area(){
        return `${this.#name} area : ${this.side1 * this.side2}`
    }
    belong(r1){
        let left = Math.max(this.x1,r1.x1)
        let right = Math.min(this.x4,r1.x4)
        let width = right - left
        let bottom = Math.max(this.y1, r1.y1)
        let top = Math.min(this.y2, r1.y2)
        let height = top - bottom
        if(width >0 && height >0){
            return `belong S: ${width*height}`
        }else{
            return "Rectangle not belong"
        }
    }
}

class Square extends Reactangle{
    #name = "Square"
    constructor(x1, y1,x2 , y2 ,x3, y3,x4, y4) {
        super(x1, y1,x2 , y2 ,x3, y3,x4, y4)
    }
    isSquare(){
        this.side1 = Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2))
        this.side2 = Math.sqrt(Math.pow((this.x3-this.x2),2)+Math.pow((this.y3-this.y2),2))
        this.side3 = Math.sqrt(Math.pow((this.x4-this.x3),2)+Math.pow((this.y4-this.y3),2))
        this.side4 = Math.sqrt(Math.pow((this.x4-this.x1),2)+Math.pow((this.y4-this.y1),2))
        if(this.side1 == 0 || this.side2 == 0 || this.side3 == 0 || this.side4 == 0){
            return false
        }
        if(this.side1 == this.side3 && this.side1 == this.side4 && this.side1 == this.side2 ){
            return true
        }else{
            return false
        }
    }
    get perimetr(){
        return `${this.#name} perimeter : ${this.side1 * 4}`
    }

    get area(){
        return `${this.#name} area : ${this.side1 * this.side2}`
    }

}

class Romb extends Reactangle{
    #name = "Romb"
    constructor(x1, y1,x2 , y2 ,x3, y3,x4, y4,r1,r2){
        super(x1, y1,x2 , y2 ,x3, y3,x4, y4)
        this.r1 = r1
        this.r2 = r2
    }
    isRomb(){
        this.side1 = Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2))
        this.side2 = Math.sqrt(Math.pow((this.x3-this.x2),2)+Math.pow((this.y3-this.y2),2))
        this.side3 = Math.sqrt(Math.pow((this.x4-this.x3),2)+Math.pow((this.y4-this.y3),2))
        this.side4 = Math.sqrt(Math.pow((this.x4-this.x1),2)+Math.pow((this.y4-this.y1),2))
        if(this.side1 == 0 || this.side2 == 0 || this.side3 == 0 || this.side4 == 0){
            return false
        }
        if(this.side1 == this.side3 && this.side1 == this.side2 && this.side1 == this.side4 ){
            return true
        }else{
            return false
        }
    }
    get area(){
        return `${this.#name} area: ${this.r1/2 *this.r2}`
    }
    get perimetr(){
        return `${this.#name} perimeter: ${this.side1 * 4}`
    }
}

class Triangl{
    constructor(side1,side2,side3){
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }
    isosceles(){
        if(this.side1 == this.side2){
            return "Triangl is issosceles"
        }
        else if( this.side1 == this.side2 == this.side3){
            return "Triangl is equilateral"
        }else{
            return "other triangl"
        }
    }
}

class Circle{
    #name = "Circle"
    constructor(x,y,r) {
        this.x = x
        this.y = y
        this.r = r
    }
    isCircle(){
        if(this.r >= 1){
            return true
        }else{
            return false
        }
    }

    circleBelong(c1){
        let dist = Math.sqrt(Math.pow((this.x - c1.x),2) + Math.pow((this.y - c1.y),2))
        if(dist > this.r + c1.r || this.x == c1.x && this.y == c1.y ){
            return "Circle and circle1 not belong"
        }else{
            let f1 = Math.acos((this.r * this.r + dist * dist - c1.r * c1.r)/(2 * this.r * dist))*2
            let f2 = Math.acos((c1.r * c1.r + dist * dist - this.r * this.r)/(2 * c1.r * dist))*2
            let area1 = 0.5 * f2 * (c1.r*c1.r) - 0.5 *(c1.r*c1.r) * Math.sin(f2)
            let area2 =  0.5 * f1 * (this.r*this.r) - 0.5 * (this.r*this.r) * Math.sin(f1)
            return  `belong S of ${this.#name} : ${area1 + area2} `
        }
    }
}


let rec = new Reactangle(0,0,0,5,5,5,5,0)
let rec1 = new Reactangle(4,3,4,7,7,7,7,3)
let sqr = new Square(0,0,0,5,5,5,5,0)
let sqr1 = new Square(2,0,2,3,5,3,5,0)
let rmb = new Romb(0,0,0,5,5,5,5,0,3,3)
let rmb1 = new Romb(1,0,1,4,5,4,5,0,4,4)
let tri = new Triangl(5,5,7)
let circle = new Circle(0,0, 9)
let circle1 = new Circle(10,10,6)
if(rec.isRectangle()&& rec1.isRectangle()){
    console.log(rec.perimetr)
    console.log(rec.area)
    console.log(rec.belong(rec1))
}else{
    console.log("Is not rectangle")
}
console.log("///////////////////////")
if(sqr.isSquare() && sqr1.isSquare()){
    console.log(sqr.area)
    console.log(sqr.perimetr)
    console.log(sqr.belong(sqr1))
}else{
    console.log("Is not square")
}
console.log("///////////////////////")
if(rmb.isRomb()&& rmb1.isRomb()){
    console.log(rmb1.area)
    console.log(rmb1.perimetr)
    console.log(rmb.belong(rmb1))
}else{
    console.log("Is not romb")
}
console.log("///////////////////////")
console.log(tri.isosceles())
console.log("///////////////////////")
if(circle.isCircle() && circle1.isCircle()){
    console.log(circle.circleBelong(circle1))
}else{
    console.log("Is not circle")
}

