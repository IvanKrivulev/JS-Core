class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}

let one = new Rectangle(10, 5, 'red');
let two = new Rectangle(20, 10, 'blue');
console.log(one);
console.log(two);
console.log(one.calcArea());
console.log(two.calcArea());