describe('VehicleTest', () => {

  let vehicle;

  beforeEach( () => {
    vehicle = new Vehicle('Ferrari 458 Italia', 2016);
   });

  describe('#new', () => {
    it('should create a new vehicle', () => {
      expect(vehicle.model).not.toBeUndefined();
    })
  })
})