class Vehicle {
  constructor(model, year){
    this.model = model;
    this.year = year;
  }
  
  info(){
    console.log(`${this.model} ${this.year}`)
  }
}

class Car extends Vehicle {
  constructor(model, year, color) {
    super(model, year)
    this.color = color;
  }
  
  info(){
    console.log(`${this.model} ${this.year} ${this.color}`)
  }
  
}

