class Circule {
  
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    const pi = Math.PI;

    return 2 * pi * this.radius;
  }
  getArea(){
      const pi = Math.PI;
      return pi * Math.pow(2,this.radius)
  };
}

const c1 = new Circule(10);
console.log(c1.getDiameter());
console.log(c1.getCircumference())
console.log(c1.getArea());