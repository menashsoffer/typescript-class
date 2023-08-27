"use strict";
class Shape {
    info() {
        return `This is a Shape`;
    }
    draw() {
        console.log(`drawing a shape`);
    }
}
class Rectangle extends Shape {
    constructor(height, length) {
        super();
        this.height = height;
        this.length = length;
    }
    areaRectangle() {
        return this.height * this.length;
    }
    scale(coeff) {
        this.height *= coeff;
        this.length *= coeff;
        return this;
    }
    static combine(r1, r2) {
        return new Rectangle(r1.height + r2.height, r1.length + r2.length);
    }
    info() {
        return `This is a rectangle`;
    }
}
// const r1 = new Rectangle(2, 3);
// const r2 = new Rectangle(4, 5);
// r1.scale(3);
// const r3 = Rectangle.combine(r1, r2);
// console.log(r3.areaRectangle());
class ColoredRectangle extends Rectangle {
    constructor(hight, length, color) {
        super(hight, length);
        this.color = color;
    }
    info() {
        return `This Rectangle is ${this.color}`;
    }
}
const ColoredRectangle1 = new ColoredRectangle(2, 3, "red");
// console.log(ColoredRectangle1.info());
class Square extends Shape {
    constructor(edge1, edge2) {
        super();
        this.edge1 = edge1;
        this.edge2 = edge2;
    }
    areaSquare() {
        return this.edge1 * this.edge2;
    }
    draw() {
        console.log(`drawing a Square`);
    }
}
const Square1 = new Square(2, 2);
// console.log(Square1.areaSquare());
class Triangle extends Shape {
    constructor(t1, t2, t3) {
        super();
        this.t1 = t1;
        this.t2 = t2;
        this.t3 = t3;
    }
    draw() {
        console.log(`drawing a Triangle`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    get diameter() {
        return 2 * this.radius;
    }
    get circumference() {
        return 2 * Math.PI * this.radius;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
    scale(factor) {
        this.radius *= factor;
    }
    draw() {
        console.log(`drawing a Circle`);
    }
}
// const c = new Circle(5);
// console.log(c.diameter);
// console.log(c.circumference);
// console.log(c.area);
// c.scale(2);
// console.log(c.radius);
const renderShapes = (shapes) => {
    shapes.forEach((shape) => {
        shape.draw();
    });
};
const shapes = [new Circle(5), new Triangle(2, 2, 3), new Square(2, 2)];
console.log(renderShapes(shapes));
