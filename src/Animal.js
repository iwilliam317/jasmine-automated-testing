class Animal{
  
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }
  
  walk(){
    return `${this.name} is walking...`
  }

  display_info(){
    return `${this.name} is a ${this.gender} animal`
  }
}


// tsuki = new Animal("tsuki", "female")
// tsuki.walk();