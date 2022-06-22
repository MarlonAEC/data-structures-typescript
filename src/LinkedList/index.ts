import Node from './LinkedListNode';

/**
 * @class LinkedList
 */
export default class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  /**
   * @constructor
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * This method is used to add a new node to the end of the list.
   * @method append
   * @param {T} data
   */
  append(data: T): void {
    const node = new Node(data, null, this.tail);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }
  /**
   * This method displays all the elements of the list in the console by default.
   * You can pass a custom function to print the node via the optional printNode
   * parameter.
   * @method displayNodes
   *
   * @param { function(T): void} [printNode]
   * @return {void}
   */
  displayNodes(printNode?: (value: T) => void): void {
    let currentNode = this.head;
    while (currentNode) {
      currentNode.print(printNode);
      currentNode = currentNode.next;
    }
  }

  /**
   * This method prints all the elements of the list in the console in reverse order.
   * You can pass a custom function to print the node via the optional printNode
   * parameter.
   *
   * @method displayNodesReverse
   * @param {function(T): void} [printNode]
   * @return {void}
   */
  displayNodesReverse(printNode?: (value: T) => void): void {
    let currentNode = this.tail;
    while (currentNode) {
      currentNode.print(printNode);
      currentNode = currentNode.prev;
    }
  }

  /**
   * This method insert an element at a particular P position in the list.
   * Returns true if the element is inserted successfully, otherwise false.
   * @method insertAt
   * @param {number} position
   * @param {T} data
   * @return {boolean | never}
   */
  insertAt(position: number, data: T): boolean | never {
    if (position > this.length) {
      throw new Error('Position is greater than the length of the list');
    } else if (position === 0) {
      this.prepend(data);
      return true;
    } else if (position === this.length) {
      this.append(data);
      return true;
    } else if (position > 0 && position < this.length) {
      let currentNode = this.head;
      let previousNode: Node<T> | null = null;
      let index = 0;

      while (index < position && !!currentNode) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }

      const node = new Node(data, currentNode, previousNode);
      (previousNode as Node<T>).next = node;
      (currentNode as Node<T>).prev = node;

      this.length++;
      return true;
    } else {
      return false;
    }
  }
  /**
   * This method is used to insert an element at the beginning of the list.
   *
   * @method prepend
   * @param {T} data
   * @return {void}
   */
  prepend(data: T): void {
    const node = new Node(data, this.head, null);

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;
    this.length++;
  }

  /**
   * This method is used to remove the element at a particular position
   * from the list.
   *
   * @method removeElementAt
   * @param {number} position
   * @return {boolean | never}
   */
  removeElementAt(position: number): boolean | never {
    if (position > this.length) {
      throw new Error('Position is greater than the length of the list');
    } else if (position === 0) {
      this.pop_front();
      return true;
    } else if (position === this.length) {
      this.pop_back();
      return true;
    } else if (position > 0 && position < this.length) {
      let currentNode = this.head;
      let previousNode: Node<T> | null = null;
      let index = 0;

      while (index < position && !!currentNode) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        index++;
      }

      if (previousNode && currentNode) {
        previousNode.next = currentNode.next;
        (currentNode.next as Node<T>).prev = previousNode;
      }

      this.length--;
      return true;
    } else {
      throw new Error('The position you entered is invalid');
    }
  }
  /**
   * @method pop_front
   */
  pop_front(): void {
    if (this.head) {
      const node = this.head;
      this.head = node.next;
      this.length--;
    }
  }
  /**
   * @method pop_back
   */
  pop_back(): void {
    if (this.tail) {
      const node = this.tail;
      this.tail = node.prev;
      this.length--;
    }
  }
  /**
   * @method size
   * @return {number}
   */
  size(): number {
    return this.length;
  }
  /**
   * @method peek_front
   * @return {T | null}
   */
  peek_front(): T | null {
    return this.head ? this.head.data : null;
  }
  /**
   * @method peek_back
   * @return {T | null}
   */
  peek_back(): T | null {
    return this.tail ? this.tail.data : null;
  }
  /**
   * @method peekAt
   * @param {number} position
   * @return {T | never}
   */
  peekAt(position: number): T | null {
    if (position > this.length) {
      throw new Error('Position is greater than the length of the list');
    } else if (position === 0) {
      return this.peek_front();
    } else if (position === this.length) {
      return this.peek_back();
    } else if (position > 0 && position < this.length) {
      let currentNode = this.head;
      let index = 0;

      while (index < position && !!currentNode) {
        currentNode = currentNode.next;
        index++;
      }

      return currentNode ? currentNode.data : null;
    } else {
      throw new Error('The position you enter is invalid');
    }
  }
}
