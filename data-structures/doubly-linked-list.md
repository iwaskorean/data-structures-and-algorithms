# Doubly Linked List

단일 연결 리스트는 다음 노드를 가르키는 한 개의 포인터만 가지고 있기 때문에 전체 리스트를 순차적 한 방향 순회만 가능하다는 문제가 있다. 이 문제를 극복하기 위한 것이 이전 노드와 다음 노드를 가르키는 두 개의 포인터를 포함한 연결 리스트인 이중 연결 리스트이다.

![](https://humanwhocodes.com/images/posts/2019/doubly-linked-list.svg)

단일 연결 리스트와 마찬가지로 이중 연결 리스트의 시작점을 헤드라고 한다. 마지막 노드는 테일이라고 하며 테일을 이용해 새 노드를 쉽게 삽입하고 리스트의 가장 뒤 부터 앞으로 검색할 수 있다.

<br>

### Advantage of Doubly Linked Lists

이전 노드와 다음 노드를 가르키는 두 개의 포인터를 포함하고 있으므로 양방향 순회가 가능하다. 

### Disadvantage of Doubly Linked Lists

단일 연결 리스트와 비교해 하나의 포인터를 더 사용해야하기 때문에 메모리 소비량이 늘어나고 구현도 복잡하다.

<br>

## Implemetation of Doubly Linked List

### Node

이중 연결 리스트의 `Node` 클래스는 이전/다음 노드를 가르키는 `next`, `previous` 프로퍼티와 `data` 프로퍼티로 구성된다.

```javascript
class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
```

### Doubly Linked List

```javascript
const head = Symbol("head");
const tail = Symbol("tail");

class DoublyLinkedList {
    constructor() {
        this[head] = null;
        this[tail] = null;
    }
    
    // add(data)
    // get(index)
    // remove(index)
    // *reverse()
}
```

#### add(data)

새로운 요소를 추가하는 내부 함수이다. 비어있는 이중 연결 리스트에 새로운 요소를 추가하는 경우 `this[head]`과  `this[tail]`이 동일한 노드로 설정된다.

```javascript
class DoublyLinkedList {
    
    add(data) {

            // 새로운 노드 생성
            const newNode = new DoublyLinkedListNode(data);

            // 빈 리스트에 추가하는 경우
            if (this[head] === null) {
                this[head] = newNode;

            } else {

                // 현재 tail의 next가 이 새로운 노드를 가르키게 하고
                // 새로운 노드의 previous가 현재의 tail을 가르키게 함
                this[tail].next = newNode;
                newNode.previous = this[tail];
            }

            // tail을 새로운 노드로 설정
            this[tail] = newNode;
        }
}
```

#### get(index)

특정 인덱스의 요소를 반환하는 함수이다.

```javascript
class DoublyLinkedList {

	...
    
    get(index) {
    
        if (index > -1) {

            let current = this[head];

            let i = 0;

            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
        
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }

}
```

#### remove(index)

특정 인덱스의 요소를 제거하는 함수이다.

```javascript
class DoublyLinkedList {
    
	...

    remove(index) {
    
        if ((this[head] === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        // special case: 첫번째 노드를 제거하는 경우
        if (index === 0) {

            // 현재 헤드에 대한 data를 저장
            const data = this[head].data;

            this[head] = this[head].next;

            // special case: 노드 하나만 존재하는 경우, tail 설정
            if (this[head] === null) {
                this[tail] = null;
            } else {
                this[head].previous = null;
            }

            return data;
        }

        // 리스트를 순회하기 위한 포인터
        let current = this[head];

        let i = 0;

        while ((current !== null) && (i < index)) {

            current = current.next;

            i++;
        }

        // 노드를 찾은 후 삭제하는 로직
        if (current !== null) {

            current.previous.next = current.next;

            if (this[tail] === current) {
                this[tail] = current.previous;
            } else {
                current.next.previous = current.previous;
            }

            return current.data;
        }

        // 찾지 못한 경우 에러 출력
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }
}
```

#### Reverse iterator

리스트를 역방향으로 순회하기 위한 함수이다.

```javascript
class DoublyLinkedList {

    *reverse(){

        // tail을 기준으로 순회
        let current = this[tail];

        while (current !== null) {
            yield current.data;
            current = current.previous;
        }
    }
}
```

<br>

### Complete Code

```javascript
class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

const head = Symbol('head');
const tail = Symbol('tail');

class DoublyLinkedList {
  constructor() {
    this[head] = null;
    this[tail] = null;
  }

  add(data) {
    const newNode = new DoublyLinkedListNode(data);

    if (this[head] === null) {
      this[head] = newNode;
    } else {
      this[tail].next = newNode;
      newNode.previous = this[tail];
    }

    this[tail] = newNode;
  }

  get(index) {
    if (index > -1) {
      let current = this[head];

      let i = 0;

      while (current !== null && i < index) {
        current = current.next;
        i++;
      }

      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }

  remove(index) {
    if (this[head] === null || index < 0) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    if (index === 0) {
      const data = this[head].data;

      this[head] = this[head].next;

      if (this[head] === null) {
        this[tail] = null;
      } else {
        this[head].previous = null;
      }

      return data;
    }

    let current = this[head];

    let i = 0;

    while (current !== null && i < index) {
      current = current.next;

      i++;
    }

    if (current !== null) {
      current.previous.next = current.next;

      if (this[tail] === current) {
        this[tail] = current.previous;
      } else {
        current.next.previous = current.previous;
      }

      return current.data;
    }

    throw new RangeError(`Index ${index} does not exist in the list.`);
  }

  *reverse() {
    let current = this[tail];

    while (current !== null) {
      yield current.data;
      current = current.previous;
    }
  }
}

```

<br>

### Example

이중 연결 리스트에 요소를 삽입/삭제/역방향순회/조회하는 예제이다.

```javascript
const list = new DoublyLinkedList();
list.add("red");
list.add("orange");
list.add("yellow");
    
console.log(list.get(1));       // "orange"

// tail에서 head 방향으로 순회
for (const color of list.reverse()) {
    console.log(color);
}
 
console.log(list.remove(1));    // "orange"
    
console.log(list.get(1));       // "yellow"
```

```javascript
// output:
orange
yellow
orange
red
orange
yellow
```

<br>

<br>

###### Note : Reverse iterator

------

**Reference**

- [Computer science in JavaScript: Doubly linked lists](https://humanwhocodes.com/blog/2019/02/computer-science-in-javascript-doubly-linked-lists/)