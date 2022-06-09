# Stack

##### Dificulty level: Basic

A stack is a linear data structure that follows the principle of Last In First Out (LIFO). This means the last element inserted inside the stack is removed first.

## Methods {#methods}

|    Method     |                                     Description                                     |        Usage         | Complexity |
| :-----------: | :---------------------------------------------------------------------------------: | :------------------: | :--------: |
| `constructor` |                              Creates an empty `Stack`                               | [here](#constructor) |    O(1)    |
|    `push`     |                     Insert an element at the top of the `Stack`                     |    [here](#push)     |    O(1)    |
|     `pop`     |                   Extracts the element at the top of the `Stack`                    |    [here](#push)     |    O(1)    |
|   `isEmpty`   |               Returns `true` if the `Stack` is empty, false otherwise               |   [here](#isEmpty)   |    O(1)    |
|     `top`     | Return the element at the top of the `Stack` without extracting it from the `Stack` |     [here](#top)     |    O(1)    |
|    `swap`     | Interchange the values of two `Stacks` of the same type but that my differ in size  |    [here](#swap)     |    O(1)    |

### Constructor {#constructor}

[go back to table](#methods)

```
const stack = new Stack<number>(); // A new stack empty
```

### Push {#push}

[go back to table](#methods)

```
const stack = new Stack<string>();
stack.push("my first value!");
console.log(stack.top()); // my first value!
```

### Pop {#pop}

[go back to table](#methods)

```
const stack = new Stack<string>();
stack.push("my first value!");
console.log(stack.top()); // my first value!
stack.pop();
console.log(stack.top()); // undefined
```

### isEmpty {#isEmpty}

[go back to table](#methods)

```
const stack = new Stack<string>();
stack.push("my first value!");
console.log(stack.isEmpty()); // false
stack.pop();
console.log(stack.isEmpty()); // true
```

### Top {#top}

[go back to table](#methods)

```
const stack = new Stack<string>();
stack.push("my first value!");
console.log(stack.top()); // my first value!
```

### Swap {#swap}

[go back to table](#methods)

```
const stack1 = new Stack();
const stack2 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

stack2.push(5);
stack2.push(6);
stack2.push(7);
stack2.push(8);

console.log(stack1.top()); // 4
console.log(stack2.top()); // 8
stack1.swap(stack2);
console.log(stack1.top()); // 8
console.log(stack2.top()); // 4
```
