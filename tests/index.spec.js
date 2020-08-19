import { expect } from 'chai';
import Node from '../src/Node';
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
      expect(ll.tail).to.be.null;
    });
  });

  describe('add', () => {
    it('can create nodes from `Node` class', () => {
      const ll = new LinkedList();

      ll.append(1);

      expect(ll.tail).to.be.instanceof(Node);
    });

    it('can insert a node at the end', () => {
      const ll = new LinkedList();

      ll.append(0);
      expect(ll.tail.data).to.equal(0);
      expect(ll.head.data).to.equal(0);

      ll.append(1);
      expect(ll.tail.data).to.equal(1);
      expect(ll.head.data).to.equal(0);

      ll.append(2);
      expect(ll.tail.data).to.equal(2);
      expect(ll.head.data).to.equal(0);
    });

    it('can insert a node at the start', () => {
      const ll = new LinkedList();

      ll.prepend(2);
      expect(ll.head.data).to.equal(2);
      expect(ll.tail.data).to.equal(2);

      ll.prepend(1);
      expect(ll.head.data).to.equal(1);
      expect(ll.tail.data).to.equal(2);

      ll.prepend(0);
      expect(ll.head.data).to.equal(0);
      expect(ll.tail.data).to.equal(2);
    });
  });
});
