const { expect } = require('@jest/globals')
const {createUser, copyArr, includesValue} = require('./reference')

it('should return user bob', () => {
  //reference tipo reiksmes matcheris yra toEqual
  expect(createUser()).toEqual({name:'Bob', email: 'bob@bob.com'})
})
it('should return array copy', () => {
  //reference tipo reiksmes matcheris yra toEqual
  expect(copyArr([2,3,4,5])).toEqual([2,3,4,5])
})
it('should return true if number is in array', () => {
  //reference tipo reiksmes matcheris yra toEqual
  expect(includesValue([2,3,4,5], 4)).toBeTruthy();
  //taspats tik kitu budu
  expect([2,3,4,5]).toContain(4)
})