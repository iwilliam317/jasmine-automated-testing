class Animal{
  
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }
  
  walk(){
    console.log(`${this.name} is walking...`);
  }
}


// tsuki = new Animal("tsuki", "female")
// tsuki.walk();