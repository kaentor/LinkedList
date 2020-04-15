const expect = require('chai').expect;
const author = require('../src/index');

describe('@kaentor/LinkedList', function() {
  it('A single linked list implementation in JavaScript', function() {
    const actual = author.username;
    const expected = 'kyoeuler';

    expect(actual).to.equal(expected);
  });
});
