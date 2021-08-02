# Priority Queue

우선순위 큐(priority queue)란 우선순위에 따라 요소가 추가되고 제거되는 큐의 한 종류이다.

우선순위가 가장 높은 요소가 우선순위 큐의 가장 앞에 위치한다. 이 요소가 제거되면 다음으로 높은 우선순위를 가진 요소가 위치하게된다.

![priority-queue](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2019/09/ezgif.com-optimize-2.gif?resize=600%2C338&ssl=1)

우선순위 큐는 다음과 같은 경우에서 사용된다.

- 다익스트라 알고리즘(Dijkstra's shortest path algorithm) : 다익스트라 알고리즘 구현시 최소값을 효율적으로 추출하기 위해 사용된다.
- 프림 알고리즘(Prim's algorithm) : 노드의 키를 저장하고 최소 키를 추출하기 위해 사용된다.
- 데이터 압축(data compression) : 데이터를 압축하기 위한 허프만  코드에서 사용된다.
- 운영체제(operating system) : 운영체제의 네트워크 트래픽 분산 작업인 로드 밸런싱을 위해 사용된다.

<br>

## Implementation of Priority Queue

### Element

`QueueElement`는 우선순위 큐의 요소로써 데이터와 우선순위를 포함하는 프로퍼티를 가진다.

```javascript
class QueueElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}
```

### Priority Queue

우선순위 큐에서 요소가 저장되는 부분은 일반 큐와 마찬가지로 배열을 사용한다. 배열말고도 최소 힙(min heap)을 사용해 구현할 수도 있다.

```javascript
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // enqueue();
  // dequeue();
  // front();
  // rear();
  // size();
  // isEmpty();
}
```

#### enqueue()

`enqueue()`는 우선순위 큐에 새로운 요소를 추가하는 메소드이다. 기존에 큐에 존재하고 있는 요소들의 우선순위와 새롭게 추가되는 요소의 우선순위에 따른 위치를 계산해 해당 위치에 새로운 요소를 추가한다.

```javascript
enqueue(data, priority) {
  let element = new QueueElement(data, priority);

  let added = false;
  for (let i = 0; i < this.items.length; i++) {
    // 새롭게 추가되는 요소의 우선순위와 기존 요소의 우선순위를 비교해
    // 새롭게 추가되는 요소의 우선순위가 높을 경우
    // 그 요소의 앞 위치에 새로운 요소 추가
    if (element.priority > this.items[i].priority) {
      this.items.splice(i, 0, element);

      added = true;
      break;
    }
  }
  // 새롭게 추가되는 요소가 기존 요소들보다
  // 낮은 우선순위를 가지고 있을때 배열의 제일 마지막 위치에 push
  if (!added) {
    this.items.push(element);
  }
}
```

#### dequeue

`dequeue()`는 우선순위 큐 가장 앞에 위치한 요소 즉, 가장 높은 우선순위를 가진 요소를 제거하는 메소드이다.

```javascript
dequeue() {
  return this.items.shift();
}
```

#### front

`front()`는  우선순위 큐 가장 앞에 위치한 요소 즉, 가장 높은 우선순위를 가진 요소를 반환하는 메소드이다.

```javascript
front() {
  return this.items[0];
}
```

#### rear

`rear()`는 우선순위 큐 가장 마지막에 위치한 요소를 반환하는 메소드이다.

```javascript
rear() {
  return this.items[this.items.length - 1];
}
```

#### size

`size()`는 우선순위 큐의 크기를 반환하는 메소드이다. 만약 우선순위 큐가 비어있을 경우 메시지가 반환된다.

```javascript
size() {
  return this.items.length ? this.items.length : 'It is Empty!!';
}
```

#### print

`print()`는 우선순위 큐의 요소들을 콘솔에 출력하는 메소드이다.

```javascript
print() {
  console.log('Data - Priority');
  for (let i = 0; i < this.items.length; i++) {
    console.log(`${this.items[i].data} - ${this.items[i].priority}`);
  }
}
```

<br>

### Complete Code

```javascript
class QueueElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    let element = new QueueElement(data, priority);

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority > this.items[i].priority) {
        this.items.splice(i, 0, element);

        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(element);
    }
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
    console.log('Index : Data - Priority');
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i} : ${this.items[i].data} - ${this.items[i].priority}`);
    }
  }
}
```

<br>

### Example

```javascript
const pq = new PriorityQueue();
pq.enqueue(121, 1);
pq.enqueue(23, 3);
pq.enqueue(99, 2);
pq.enqueue(1000, 10);

pq.print(); // #1
pq.dequeue(); // #2
pq.front(); // #3
pq.rear(); // #4
pq.size(); // #5

pq.dequeue(); 
pq.dequeue();
pq.dequeue();

pq.size(); // #6
```

```javascript
// output: 

// #1. print
Index : Data - Priority
0 : 1000 - 10
2 : 23 - 3
4 : 99 - 2
5 : 121 - 1

QueueElement {data: 1000, priority: 10} // #2. dequeue

QueueElement {data: 23, priority: 3} // #3 front

QueueElement {data: 121, priority: 1} // #4 rear

3 // #5 size

"It is Empty" // #6 size
```

<br>

<br>

------

**Reference**

- [Priority Queue Implementation in javascript](https://learnersbucket.com/tutorials/data-structures/priority-queue-implementation-in-javascript/)