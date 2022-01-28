const excpect = require ('chai').expect;
const assert = require ('chai').assert;
const should = require ('chai').should();
const mylib = require ('../src/mylib');

describe ('Unit testing mylib.js', () => {

    let myvar = undefined;
    before (() => {
        myvar = 1;
    })
    it ('Should return 2 when using sum function with a=1, b=1', () => {
        const result = mylib.sum (1,1)
        excpect (result).to.equal(2)
    })
    it.skip ('Assert foo is not bar', () => {
        assert('foo' !== 'bar')
    })
    it ('Myvar should exsist', () => {
        should.exist(myvar)
    })
    after (() => {
        console.log ('Hello from console.log !')
    })
})