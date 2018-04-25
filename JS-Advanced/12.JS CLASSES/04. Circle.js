class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    set diameter(newDiameter){
        this.radius = newDiameter / 2;
    }
    get area(){
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(5);
console.log(c.area);
c.area = 20;
console.log(c.radius);