import { expect } from 'chai';
import LinkedList from '../src';

describe('@kaentor/LinkedList', () => {
  it('A single linked list implementation in JavaScript', () => {
    expect(true).to.equal(true);
  });
});


describe('@kaentor/LinkedList :: Instance', () => {
  it('can be constructed and used as an object', () => {
    const list = new LinkedList();
    list.aProperty = 1;

    expect(list.aProperty).to.equal(1);
  });
});
