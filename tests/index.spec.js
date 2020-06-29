import { expect } from 'chai';
import LinkedList from '../src';

describe('@kaentor/LinkedList', () => {
  describe('Linked List', () => {
    it('A single linked list implementation in JavaScript', () => {
      expect(true).to.equal(true);
    });

    it('can be constructed and used as an object', () => {
      const ll = new LinkedList();
      ll.aProperty = 1;

      expect(ll.aProperty).to.equal(1);
    });

    it('can create an empty linked list', () => {
      const ll = new LinkedList();

      expect(ll.head).to.be.null;
    });
  });
});
