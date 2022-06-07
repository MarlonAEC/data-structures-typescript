/**
 * The Queue class is a data structure that allows you
 * to add elements to the end of the queue and
 * remove elements from the front of the queue
 * @class Queue
 */
export default class Queue<Type> {
  elements: Type[];

  /**
   * The constructor for the Queue class.
   * @constructor
   */
  constructor() {
    this.elements = [];
  }

  /**
   * Return the first element of the queue.
   * @return {Type} The first element in the queue.
   */
  front() {
    return this.elements[0];
  }

  /**
   * The push function adds a value to the end of the queue.
   * @param {Type} value - The value to add to the queue.
   */
  push(value: Type): void {
    this.elements[this.elements.length] = value;
  }

  /**
   * If the queue is empty, throw an error, otherwise delete
   * the first element in the queue
   */
  pop(): void | never {
    if (this.isEmpty()) {
      throw new Error('The queue is empty  there is nothing to pop.');
    }
    this.elements.shift();
  }

  /**
   * If the length of the elements array is equal to zero,
   * return true, otherwise return false
   * @return {boolean}A boolean value.
   */
  isEmpty(): boolean {
    if (this.elements.length === 0) return true;
    return false;
  }
}
