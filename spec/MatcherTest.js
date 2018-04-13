describe('MatcherTest', () =>{


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
    expect(evenNumbers).toContain(2);
  })
})