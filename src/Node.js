class Node {
  constructor(data) {
    this.data = data;
    this.next = null;

    this.dtype = typeof data;
  }
}

export default Node;
