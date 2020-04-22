import { expect } from 'chai';
import author from '../src/index';

describe('@kaentor/LinkedList', () => {
  it('A single linked list implementation in JavaScript', () => {
    const actual = author.username;
    const expected = 'kyoeuler';

    expect(actual).to.equal(expected);
  });
});
