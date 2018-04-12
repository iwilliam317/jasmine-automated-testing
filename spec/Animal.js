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
      expect(animal.walk()).toEqual('Tsuki is walking...');
    })
  })

  describe('#display_info()', function(){
    it('should display the name and gender', function(){
      expect(animal.display_info()).toEqual('Tsuki is a female animal');
    })
  })


})