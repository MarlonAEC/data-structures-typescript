# Queue

Queues are a type of container adaptors that operate in a first in first out (FIFO) type of arrangement. Elements are inserted at the back (end) and are deleted from the front. This Queue use an array as its underlying container, providing a specific set of member functions to access its elements.

## Usage

You can import the Queue as follows:

```
import { Queue } from "data-structures-typescript";

const Q = new Queue<Type>()
```

where `Type` is the type of your queue.

## Methods

The queue currently supports the methods below:

|    Method     |                                      Description                                      |        Usage         |
| :-----------: | :-----------------------------------------------------------------------------------: | :------------------: |
| `constructor` |                                creates an empty queue                                 | [here](#constructor) |
|    `front`    |  retuns the element in the front of the queue or `undefined` if the `Queue` is empty  |    [here](#front)    |
|    `push`     |                    insert a new element into the queue at the end                     |    [here](#push)     |
|     `pop`     | pops the first element in the queue and throws an `Exception` if the `Queue` is empty |     [here](#pop)     |
|   `isEmpty`   |                returns `true` if the Queue is empty `false` otherwise                 |   [here](#isEmpty)   |

##### Constructor {#constructor}

The constructor method will initialize the Queue to an empty array so when you call:

```
const Q = new Queue<number>()
```

this will create a Queue with the `elements` array to an empty array `[]`;

##### Front method {#front}

The `front` method returns the element at the front of the `Queue`

```
const Q = new Queue<number>()
Q.push(23);
console.log(Q.front()); // 23
Q.pop();
console.log(Q.front()); // undefined
```

##### Pop method {#pop}

```
const Q = new Queue<number>();
Q.push(1);
Q.pop();
console.log(Q.front()); // undefined
Q.pop() // The queue is empty  there is nothing to pop.
```

##### isEmpty method {#isEmpty}

```
const Q = new Queue<number>();
console.log(Q.isEmpty()) // true
Q.push(2);
console.log(Q.isEmpty()) // false
```
