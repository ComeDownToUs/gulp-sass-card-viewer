var expect = require('chai').expect
var javas = require('../js/index.js')

console.log(javas)

describe('sample function', ()=> {
  it('should return true', () => {
    expect(javas.returnTrue()).to.equal(true)
  })
})
