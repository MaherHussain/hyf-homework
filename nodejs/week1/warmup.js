class Circule {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    const pi = 3.14;

    return 2 * pi * this.radius;
  }
  getArea(){
      const pi = 3.14;
      return pi * this.radius * this.radius
  };
}

const c1 = new Circule(10);
console.log(c1.getDiameter());