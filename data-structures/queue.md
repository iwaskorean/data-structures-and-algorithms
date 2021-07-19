# Queue

큐(queue)란 사람들이 줄을 서는 것처럼 순차적이고 순서가 있는 자료구조이다. 줄에서 먼저 기다리고 있던 사람이 먼저 나가는 것과 같은 선입선출(FIFO, First In First Out) 원칙을 따른다.

![q](https://dmitripavlutin.com/2e1aee372cae31a13b0809df4ac606ff/queue-12.svg)

큐에 새로운 데이터가 들어오는(enqueue) 위치를 테일, 데이터를 삭제, 출력(dequeue)할 때 대상이 되는 위치를 헤드라고 한다.

<br>

### The operations on Queue

큐에서 이루어지는 작업들은 다음과 같다.

- enqueue : 큐의 가장 뒤 위치에 항목을 삽입한다. 삽입된 항목은 큐의 테일이 된다.
- dequeue : 큐의 가장 앞 항목을 추출한다. 추출된 항목의 다음 항목이 헤드가 된다.
- peek : 큐의 헤드를 읽는다. 
- length : 큐에 포함된 항목의 수를 계산한다.

<br>

## Implementation of Queue

### Queue

큐는 데이터를 가지고 있는 객체인 `item`,  헤드의 인덱스를 나타내는 `head`, 테일의 인덱스를 나타내는 `tail` 프로퍼티를 가진다.

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  // enqueue(item) 
  // dequeue() 
  // peek()
  // length()

}
```

#### Enqueue

테일 위치에 새로운 항목을 추가하며 테일의 인덱스를 하나 증가시키는 함수이다.

```javascript
enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
}
```

#### Dequeue

헤드 위치에 항목을 반환하고 헤드의 인덱스를 하나 증가시키는 함수이다.

```javascript
dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
}
```

#### Peek

큐의 현재 헤드 위치에 항목을 반환하는 함수이다.

```javascript
peek() {
  return this.items[this.headIndex];
}
```

#### Length

현재 큐의 항목 갯수 즉, 큐의 길이를 반환하는 함수이다.

```javascript
length() {
	return this.tailIndex - this.headIndex;
}
```

<br>

### Complete Code

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  length() {
    return this.tailIndex - this.headIndex;
  }
}
```

<br>

### Example

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(999);

queue.dequeue(); 
queue.peek();    
queue.length(); 
```

```javascript
// output:
10
2
3
```

<br>

<br>

------

**Reference**

- [How to Implement a Queue in JavaScript](https://dmitripavlutin.com/javascript-queue/)