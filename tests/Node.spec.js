import { expect } from 'chai';
import Node from '../src/Node';

describe('@kaentor/LinkedList :: Node', () => {
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
    const first = new Node(10);
    first.next = new Node(20);

    expect(first.data).to.equal(10);
    expect(first.next.data).to.equal(20);
  });
});
