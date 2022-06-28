export interface QueueBase<Type> {
  enqueue: (item: Type) => void;
  dequeue: () => Type | undefined;
  front: () => Type | undefined;
  rear: () => Type | undefined;
  isEmpty: () => boolean;
  size: () => number;
}

/**
 * Queue class that implements the ADT queue.
 * A queue is a data structure that allows you
 * to add elements to the end of the queue and
 * remove elements from the front of the queue
 * in a FIFO (first in first out) style.
 * @class Queue
 */
export default class Queue<Type> implements QueueBase<Type> {
  private elements: Type[] = [];

  /**
   * Adds an element to the end of the queue.
   * @param {type} element - New element to add to the queue.
   */
  enqueue(element: Type): void {
    this.elements.push(element);
  }

  /**
   * Removes the first element from the queue and returns it.
   * If the queue is empty, undefined is returned and the
   * queque is not modified.
   * @return {type} Type | undefinded
   */
  dequeue(): Type | undefined {
    return this.elements.shift();
  }

  /**
   * Returns the first element of the queue.
   * @return {type} Type | undefinded
   */
  front(): Type | undefined {
    return this.elements[0];
  }

  /**
   * Returns the last element of the queue.
   * @return {type} Type | undefinded
   */
  rear(): Type | undefined {
    return this.elements[this.elements.length - 1];
  }

  /**
   * Returns true is the queue is empty, otherwise
   * returns false.
   * @return {type} boolean
   */
  isEmpty(): boolean {
    return this.elements.length === 0 ? true : false;
  }
  /**
   * Returns the number of elements in the queue.
   * @return {type} number
   */
  size(): number {
    return this.elements.length;
  }
}
