## Pair

Pair is used to combine together two values that may be of different data types. Pair provides a way to store two heterogeneous objects as a single unit. It is basically used if we want to store tuples. The pair container is a simple class consisting of two data elements or objects.

### Usage

to use this data sstructure just import it as follow:

```
import { Pair } from "data-structures-typescript";

const P = new Pair<Type1, Type2>(first, second)
```

this creates a new par where `first` is an `Object` of type `Type1` and the `sencond` is `Object` of type `Type2` keep in mind you can use it with the standard types (`string`, `number`, `boolean`, ...etc)

### Methods

|            Method            |                                                           Description                                                            |        Usage         |
| :--------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------: |
| `constructor(first, second)` |                       creates a pair where `first` is the first element and `second` is the second element                       | [here](#constructor) |
|      `isEqual(P: Pair)`      | this method compares the invoker pair with the pair passed as parameter, returns `true` if the pairs are equal `false` otherwise |   [here](#isEqual)   |

##### Constructor {#constructor}

```
type MyType{
    key1: string;
    key2: number;
}

const second: MyType = {
    key1: "my awesome string",
    key2: 3
}
const P = new Pair<string, MyType>("string stored in first", second)

console.log("First: ",P.first);
console.log("Second: ", P.second);
```

##### isEqual {#isEqual}

```
const pair1 = new Pair<number, string>(1, 'value1');
const pair2 = new Pair<number, string>(1, 'value1');
console.log(pair1.isEqual(pair2)) //true
```
