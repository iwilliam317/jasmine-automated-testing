describe('Animal', function(){

  let animal;

  beforeEach(function(){
    animal = new Animal('tsuki', 'female');
  })

  describe('when creating an animal', function(){

    it ('should be named as tsuki', function(){
      expect(animal.name).toEqual('tsuki');
    });

    it ('should be a female gender', function(){
      expect(animal.gender).toEqual('female');
    })

  })


})