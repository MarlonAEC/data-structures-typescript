/**
 * @class Node
 */
export default class LinkedListNode<T> {
  public data: T;
  public next: LinkedListNode<T> | null;
  public prev: LinkedListNode<T> | null;

  /**
   * @constructor
   * @param {T} data
   * @param {LinkedListNode<T>} next
   * @param {LinkedListNode<T>} prev
   */
  constructor(data: T, next: LinkedListNode<T> | null, prev: LinkedListNode<T> | null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }

  /**
   * This method is used to print the node. By default it prints
   * the data property in the console. But you can pass a custom
   * function to print the node via the printFunction parameter.
   *
   * @method print
   * @param {function(T):void} [printNodeFunction]
   * @return {void}
   */
  print(printNodeFunction?: (value: T) => void): void {
    if (printNodeFunction) {
      printNodeFunction(this.data);
    } else {
      console.log(this.data);
    }
  }
}
