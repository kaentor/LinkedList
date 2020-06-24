import { expect } from 'chai';
import Node from '../src/Node';

describe('@kaentor/LinkedList :: Node', () => {
  it('can be constructed as an empty object', () => {
    const node = new Node();

    expect(node.data).to.be.undefined;
    expect(node.next).to.be.undefined;
  });
});
