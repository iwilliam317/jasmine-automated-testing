describe('MatcherTest', () =>{

  describe('matchers', () => {

    it('#toBe #not.toBe', () => {
      let value = true;
      expect(value).not.toBe(false);
      expect(value).toBe(true);
    })

    it('#toMatch #toEqual', () => {
      let word = 'foo';
      expect(word).toMatch('foo');
      expect(word).toEqual('foo');
    })

    it('#toBeDefined #toBeUndefined', () => {
      let _undefined;
      let _defined = "";
      expect(_undefined).not.toBeDefined();
      expect(_undefined).toBeUndefined();
      expect(_defined).toBeDefined();
      expect(_defined).not.toBeUndefined();
    })

    it('#toBeNull #not.toBeNull', () => {
      let _null = null;
      let foo = "";
      expect(_null).toBeNull();
      expect(foo).not.toBeNull();
    })

    it('#toBeTruthy #toBeFalsy', () => {
      let empty, not_empty = "whatever..";
      expect(not_empty).toBeTruthy();
      expect(not_empty).not.toBeFalsy();
      expect(empty).toBeFalsy();
      expect(empty).not.toBeTruthy();
    })

    it('#toContain', () =>{
      let evenNumbers = [2, 4, 6];
      let sentence = "an elephant goes to.."
      expect(evenNumbers).toContain(2);
      expect(evenNumbers).not.toContain(1);
      expect(sentence).toContain('elephant');
    })

    it('#toBeLessThan #toBeGreaterThan', () => {
      let pi = 3.1415926;
      expect(pi).toBeLessThan(5);
      expect(pi).not.toBeLessThan(1);
      expect(pi).toBeGreaterThan(1);
    })

    it('#toThrow', () => {
      let _return = () => "ok" ;   
      let _throw = () => { throw 'error' };
      expect(_return).not.toThrow();
      expect(_throw).toThrow('error');      
    })

    it('#toThrowError', () => {
      let error = () => { throw new TypeError("my error") }
      expect(error).toThrowError("my error");
    })
    
  })

  describe('#xdescribe #xit', () => {
    xit('disable an specific test', () => {
      expect(true).toBe(false);
    })
    it('#pending()', () => {
      pending();
    })
  })

})