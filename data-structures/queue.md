# Queue

큐(queue)란 사람들이 줄을 서는 것처럼 순차적이고 순서가 있는 자료구조이다. 줄에서 먼저 기다리고 있던 사람이 먼저 나가는 것과 같은 선입선출(FIFO, First In First Out) 원칙을 따른다.

![queue](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Queue-Illustration.png)

큐에 enqueue(새로운 요소 삽입)되는 위치를 back, dequeue(요소 제거)되는 위치를 front라고 한다.

<br>

## Implementation of Queue

### Queue

큐는 배열을 사용해 구현할 수 있다.

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue(element) 
  // dequeue() 
  // front()
  // rear()
  // size() 
  // print()
  }
}
```

#### Enqueue

`enqueue()`는 큐의 가장 마지막 위치, 즉 back에 새로운 요소를 삽입하는 메소드이다.

```javascript
enqueue(element) {
  this.items.push(element);
}
```

#### Dequeue

`dequeue()`는 큐의 가장 첫 번째 위치, 즉 front에 위치한 요소를 제거후 반환하는 메소드이다.

```javascript
dequeue() {
  return this.items.shift();
}
```

#### front, rear

`front()`는 큐의 front에 위치한 요소를, `rear()`는 큐의 back에 위치한 요소를 반환하는 메소드이다.

```javascript
front() {
  return this.items[0];
}

rear() {
  return this.items[this.items.length - 1];
}
```

#### size

`size()`는 큐의 크기를 반환하는 메소드이다. 만약 큐가 비어있을경우 메시지를 반환한다.

```javascript
size() {
  return this.items.length ? this.items.length : 'It is Empty!!';
}
```

#### print

`print()`는 큐의 요소들을 콘솔에 출력하는 메소드이다.

```javascript
print() {
  console.log('Index : Element');
  for (let i = 0; i < this.items.length; i++) {
    console.log(`${i} : ${this.items[i]}`);
  }
}
```

<br>

### Complete Code

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length ? this.items.length : 'It is Empty!!';
  }

  print() {
    console.log('Index : Element');
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i} : ${this.items[i]}`);
    }
  }
}
```

<br>

### Example

```javascript
const q = new Queue();

q.enqueue(10);
q.enqueue(2);
q.enqueue(5);
q.enqueue(999);

q.print();
q.dequeue();
q.front();
q.rear();
q.size();
```

```javascript
// output:

Index : Element
0 : 10
1 : 2
2 : 5
3 : 999

10
2
999
3
```

<br>

<br>

------

**Reference**

- [JavaScript Queue](https://www.javascripttutorial.net/javascript-queue/)