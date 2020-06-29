import { expect } from 'chai';
import Node from '../src/Node';

describe('@kaentor/LinkedList', () => {
  describe('Node', () => {
    it('can be constructed as an empty object', () => {
      const node = new Node();

      expect(node.data).to.be.undefined;
      expect(node.next).to.be.null;
    });

    it('can create a node with value', () => {
      const node = new Node(1);

      expect(node.data).to.equal(1);
      expect(node.next).to.be.null;
    });

    it('can create a node with an object as a value', () => {
      const node = new Node({ key: 1, value: 'OBJECT' });

      expect(node.data.key).to.equal(1);
      expect(node.data.value).to.equal('OBJECT');
      expect(node.next).to.be.null;
    });

    it('can link two nodes together', () => {
      const first = new Node(1);
      first.next = new Node(2);

      expect(first.data).to.equal(1);
      expect(first.next.data).to.equal(2);
      expect(first.next.next).to.be.null;
    });

    it('can link three nodes together', () => {
      const first = new Node(1);
      const second = new Node(2);
      const third = new Node(3);

      first.next = second;
      second.next = third;

      expect(first.data).to.equal(1);
      expect(first.next).to.be.not.null;
      expect(second.data).to.equal(2);
      expect(second.next).to.be.not.null;
      expect(third.data).to.equal(3);
      expect(third.next).to.be.null;

      expect(first.next.next.next).to.be.null;
    });

    it('can return the datatype as a string value', () => {
      const node = new Node(1);

      expect(node.dtype).to.be.a('string');
    });

    it('can return the corresponding datatype', () => {
      const string = new Node('K');
      const number = new Node(1);
      const object = new Node({ value: 1 });

      expect(string.dtype).to.equal('string');
      expect(number.dtype).to.equal('number');
      expect(object.dtype).to.equal('object');
    });
  });
});
