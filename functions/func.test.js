const {add, divide} = require('./func');


test('add fn should add 2 and 10', () => {
  //tikimes naudojant add funkcija, su duotais argumentais gausime teisinga ats

  expect(add(2,10)).toBe(12);
  expect(add(1,5)).toBe(6)
})

test('20 divided by 10, be 2', ()=> {
expect(divide(20,10)).toBe(2);

})
test('divided by 0, returns 0', ()=> {

expect(divide(20,0)).toBeNull();
expect(divide(20,0)).toBeDefined();
})