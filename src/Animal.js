const attributes = new WeakMap();

class Animal{
  constructor(name, gender){
    attributes.set(this, {name, gender})
  }
  
  getAttribute(attribute){
    return attributes.get(this)[attribute];
  }
  walk(){
    return `${attributes.get(this)['name']} is walking...`
  }

  display_info(){
    return `${attributes.get(this)['name']} is a ${attributes.get(this)['gender']} animal`
  }
}