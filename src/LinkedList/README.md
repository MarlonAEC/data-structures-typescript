# Linked List

In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.[{1}](https://en.wikipedia.org/wiki/Linked_list#:~:text=In%20computer%20science%2C%20a%20linked,which%20together%20represent%20a%20sequence.)

In this implementation of Linked list you can found the following methods:

1. [Constructor](#constructor)
2. [Append](#append)
3. [Display Nodes](#displayNodes) (Commonly used to print the list).
4. [Display Nodes Reverse](#displayNodesReverse) (Commonly used to print the list in reverse order)
5. [Insert At](#insertAt)
6. [Prepend](#prepend)
7. [Remove Element At](#removeElementAt)
8. [Pop Front](#popFront)
9. [Pop Back](#popBack)
10. [Size](#size)
11. [Peek front](#peekFront)
12. [Peek Back](#peekBack)
13. [Peek At](#peekAt)

## Implementation {#implementation}

This `LinkedList` is implemented using the `class` [LinkedListNode](#), this `class` is in charge of store all the data of for a particular element of the list. The list has three private properties: `tail` a reference that points to last element of the list, `head` a reference that points to the first element of the list, `length` a number that represent the amount of elements of the list

### Constructor {#constructor}

This method creates a empty `LinkedList`:

```
import { LinkedList } from 'data-structures-typescript'

const L = new LinkedList<string>(); // empty list of <string> where head = tail = null
const L1 = new LinkedList<YorObjectType>(); // empty list of <YourObjectType>
```

### Append {#append}

This method append an element at the end of the list

```
const L = new LinkedList<string>(); //empty list
L.append("first");
L.append("second"); // L now is "first" <-> "second"
L.size() // the length of the list is 2
```

### displayNodes {#displayNodes}

This method by default prints all the elements of the list in the console but you can pass it your own print function and override this behavior, keep in mind your print function needs to receive the element to print and return void:

```
const L = new LinkedList<number>();
L.append(2);
L.append(23);
L.append(45);
L.append(7);

L.displayNodes();
// 2 23 45 7

let A = [];
const myOwnPrintFunction = (value: number) => {

}

L.displayNodes(myOwnPrintFunction)
// will print
```
