describe('Animal', function(){

  let animal;

  beforeEach(function(){
    animal = new Animal('Tsuki', 'female');
  })

  describe('when creating an animal', function(){
    it('should be named as Tsuki', function(){
      expect(animal.getAttribute('name')).toEqual('Tsuki');
    });

    it('should be a female gender', function(){
      expect(animal.getAttribute('gender')).toEqual('female');
    })

    it('should not allow access to attributes', function(){
      expect(animal.name).toEqual(undefined);
      expect(animal.gender).toEqual(undefined);
    })
  })

  describe('#walk()', function(){
    it ('should walk', function(){
      spyOn(animal, 'walk').and.returnValue('Tsuki is walking...')
      expect(animal.walk()).toEqual('Tsuki is walking...');
    })

    it('should call #walk()', () => {
      spyOn(animal, 'walk');
      animal.walk();
      expect(animal.walk).toHaveBeenCalled();

    })
  })

  describe('#display_info()', function(){
    it('should display the name and gender', function(){
      expect(animal.display_info()).toEqual('Tsuki is a female animal');
    })

    it('shoud call #display_info', () => {
      //overriding Tsuki is a female animal for blabla
      spyOn(animal, 'display_info').and.returnValue('Animal walking...');
      animal.display_info();
      expect(animal.display_info()).toContain('Animal walking...')
      expect(animal.display_info).toHaveBeenCalled();
    })    
  })

  describe('#setOwner()', () => {
    it('should set william as owner', () => {
      animal.setOwner('william');
      expect(animal.getAttribute('owner')).toEqual('william');
    })

    it('should call setOwner()', () => {
      spyOn(animal, 'setOwner');
      animal.setOwner('william');
      expect(animal.setOwner).toHaveBeenCalledWith('william');   
      expect(animal.setOwner.calls.count()).toBe(1);
      expect(animal.setOwner.calls.any()).toBe(true)         
    })
  })

  describe('protected attributes', () => {
    it('should be undefined when access directly', () => {
      expect(animal.name).toBeUndefined();
      expect(animal.gender).toBeUndefined();
      expect(animal.owner).toBeUndefined();
    })

    it('throws an error when calls getAttribute without argument', () => {
      spyOn(animal, 'getAttribute').and.throwError('Attribute must be passed');
      expect(animal.getAttribute).toThrowError('Attribute must be passed');
    })
  })

})