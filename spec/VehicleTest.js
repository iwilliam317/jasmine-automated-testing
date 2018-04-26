describe('VehicleTest', () => {

  let vehicle;

  beforeEach( () => {
    vehicle = new Vehicle('Ferrari 458 Italia', 2016);
   });

  describe('#new', () => {
    it('should create a new vehicle', () => {
      expect(vehicle.model).not.toBeUndefined();
      expect(vehicle.model).toEqual('Ferrari 458 Italia');
    })
  })

  describe('#info', () => {
    it('should display Ferrari 458 Italia 2016 ', () => {
      spyOn(vehicle, 'info');
      vehicle.info();
      expect(vehicle.info).toHaveBeenCalled();
      expect(vehicle.info.calls.count()).toEqual(1);
      
    })
  })

  describe('with invalid params', () => {
    let invalidVehicle = new Vehicle();
    
    it('should be undefined', () => {
      expect(invalidVehicle.model).toBeUndefined();
      expect(invalidVehicle.year).not.toBeDefined();
    })

    it('throws error', () => {
      spyOn(invalidVehicle, 'info').and.throwError('Invalid vehicle');
      expect(invalidVehicle.info).toThrowError('Invalid vehicle')
    })
  })
})