/**
 * A stack is a linear data structure that follows the principle
 * of Last In First Out (LIFO). This means the last element
 * inserted inside the stack is removed first.
 * @class Stack
 */
export default class Stack<T> {
  private _stack: T[] = [];

  /**
   * The constructor for the Stack class.
   * @contructor
   */
  constructor() {
    this._stack = [];
  }

  /**
   * Add a value to the top of the stack
   * @param {T} value - The value to add to the stack.
   */
  push(value: T): void {
    this._stack.push(value);
  }

  /**
   * Remove the top element from the stack
   * @return {void}
   */
  pop(): void | never {
    if (this.isEmpty()) {
      throw new Error('The stack is empty  there is nothing to pop.');
    }
    this._stack.pop();
  }
  /**
   * A function that returns true if the stack is empty, false otherwise
   * @return {boolean} A boolean value.
   */
  isEmpty(): boolean {
    if (this._stack.length === 0) return true;
    return false;
  }

  /**
   * @return {T} Get the value of the top element without removing it
   */
  top(): T | undefined {
    return this._stack[this._stack.length - 1];
  }

  /**
   * A function that swap the values of two stacks of the same type
   * but the sizes may be different
   * @param {Stack<T>} stack - The stack to swap with
   * @return {void}
   */
  swap(stack: Stack<T>): void {
    const temp = this._stack;
    this._stack = stack._stack;
    stack._stack = temp;
  }
  /**
   * A function that returns the size of the stack
   * @return {number} The size of the stack
   */
  size(): number {
    return this._stack.length;
  }
}
