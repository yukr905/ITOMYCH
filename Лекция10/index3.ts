let a:{x1:number , y1:number} = {x1:0,y1:0}
let b:{x2:number , y2:number} = {x2:3,y2:3}
let c:{x3:number , y3:number} = {x3:6,y3:0}
let point:{x0:number,y0:number} = {x0:1,y0:1}

function belong(a:{x1:number,y1:number} , b:{x2:number,y2:number} , c:{x3:number,y3:number} , p:{x0:number,y0:number}):number|string{
    if(a.x1 > 100|| a.y1 > 100|| b.x2 > 100|| b.y2 > 100|| c.x3 > 100|| c.y3 > 100|| p.x0 > 100|| p.y0 > 100){
        return "coordinate must not be greater than 100"
    }else{
    let a1:number = (a.x1-p.x0)*(b.y2-a.y1)-(b.x2-a.x1)*(a.y1-p.y0)
    let b1:number = (b.x2-p.x0)*(c.y3-b.y2)-(c.x3-b.x2)*(b.y2-p.y0)
    let c1:number = (c.x3-p.x0)*(a.y1-c.y3)-(a.x1-c.x3)*(c.y3-p.y0)
        if((a1>=0&&b1>=0&&c1>=0)||(a1 <= 0 && b1 <= 0 && c1 <= 0)){
            return 1
        }else{
            return 0
        }
    }
}

console.log(belong(a,b,c,point))