# Stack

스택(stack)이란 항목들의 컬렉션을 제공하는 추상적인 데이터 타입이다.  마지막에 들어온 데이터가 가장 먼저 나가는 후입선출(LIFO, Last In First Out) 원칙을 따른다.

![stack](https://res.cloudinary.com/practicaldev/image/fetch/s--s_Ih2JW7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/q5a0ym6de9ckp9buhkob.jpg)

<br>

## Implementation of Stack

### Stack

스택은 항목들을 담을 수 있는 배열 `items` 프로퍼티를 가진다.

```javascript
class Stack { 
  constructor() { 
    this.items = []; 
  } 
    
  // push(element)
  // pop()
  // peek()
  // isEmpty()
    
}
```

#### push

스택에 새로운 항목을 추가하는 함수이다.

```javascript
push(element) {
  this.items.push(element);
}
```

#### pop

가장 최근에 추가된 항목을 스택에서 삭제하고 반환하는 함수이다.

```javascript
pop() {
  if (this.items.length === 0) return -1;
  return this.items.pop();
}
```

#### peek

스택에 가장 상단에 위치한(top) 항목을 반환하는 함수이다.

```javascript
peek() {
  return this.items[this.items.length - 1];
}
```

#### getSize

스택에 존재하는 항목의 갯수를 반환하는 함수이다.

```javascript
getSize() {
  return this.items.length;
}
```

#### isEmpty

스택이 비어있을 경우 `true`, 비어있지 않은 경우 `false`를 반환하는 함수이다.

```javascript
isEmpty() {
  return this.items.length === 0;
}
```

<br>

### Complete Code

```JAVASCRIPT
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return -1;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

```

<br>

### Example

```javascript
const stack = new Stack();

stack.isEmpty(); // *1

stack.push(0);
stack.push(1);
stack.push(2);
stack.push('Hello');

stack.getSize(); // *2

stack.peek(); // *3

stack.pop(); // *4
stack.pop(); // *5
stack.pop(); // *6
stack.pop(); // *7

stack.isEmpty(); // *8
```

```javascript
// output: 

true // *1
4 // *2
"Hello" // *3
"Hello" // *4
2 // *5
1 // *6
0 // *7
true // *8
```

<br>

<br>

------

**Reference**

- [How to Implement the Stack Data Structure in Javascript](https://dev.to/erickarugu/implementing-the-stack-data-structure-in-javascript-59n5)