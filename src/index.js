import Node from './Node';

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);

    this.head = node;
  }
}

export default LinkedList;
