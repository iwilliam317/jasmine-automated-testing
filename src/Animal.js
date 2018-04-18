const attributes = new WeakMap();

class Animal{
  constructor(name, gender){
    attributes.set(this, {name, gender})
  }
  
  getAttribute(attribute){
    if (attribute){
      return attributes.get(this)[attribute];
    }
    else{
      throw Error('Attribute must be passed');
    }
  }
  walk(){
    return `${attributes.get(this)['name']} is walking...`
  }

  display_info(){
    return `${attributes.get(this)['name']} is a ${attributes.get(this)['gender']} animal`
  }

  setOwner(owner){
    attributes.set(this, { owner } );
  }
}