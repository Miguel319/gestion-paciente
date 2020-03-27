export class Node {
  data: any;
  next: any;

  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}
