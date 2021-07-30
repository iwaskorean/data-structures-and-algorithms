# Heap(binary heap)

힙(heap)이란 노드가 자식 노드의 값에 따라 정렬되는 트리 형태의 데이터구조이다. 부모 노드는 항상 자식 노드의 값 보다 크거나 작아야한다. 부모 노드가 자식 노드보다 크거나 같은 값을 가지는 힙을 최대 힙(max-heap), 부모 노드가 자식 노드보다 작거나 같은 값을 가지는 힙을 최소 힙(min-heap)이라고 한다.

이진 힙(binary heap)이란 부모 노드가 2개 이하의 자식 노드를 가질 수 있는 힙의 한 종류이다. 또한 이진 힙은 마지막 레벨을 제외한 모든 레벨의 노드들이 채워진 형태의 완전이진트리여야하며 노드들은 왼쪽부터 정렬되어야한다.

노드 추출 시 가장 높은 우선 순위(higheset priority)를 가지는 최상단에 위치한 노드만 추출할 수 있다.

![i](https://miro.medium.com/max/720/1*xJOocKUumjmBK2SXcPHHvA.jpeg)

이진 힙은 트리의 효율적인 삽입 연산이 가능하며 데이터들의 순서, 즉 우선순위(priority)를 유지하기 때문에 우선순위 큐(priority queue)를 구현하는데 사용할 수 있다.

<br>

## Implementation of binary heap

이진 힙은 구현시 배열을 사용해 트리를 표현한다. 각 노드의 인덱스가 가지는 특징은 다음과 같다.

- 트리의 루트 노드는 배열의 0번 인덱스가 아닌 1번 인덱스에 위치한다.
- n번 인덱스에 위치한 노드의 왼쪽 자식 노드는 2n번 인덱스에 위치한다.
- n번 인덱스에 위치한 노드의 오른쪽 자식 노드는 2n+1번 인덱스에 위치한다.
- n번 인덱스에 위치한 노드의 부모 노드는 n/2번 인덱스에 위치한다.

<br>

### Min Heap

루트 노드는 배열의 0번 인덱스가 아닌 1번 인덱스에 위치해야하므로 배열의 첫번째 요소는 `null`로 초기화한다.

```javascript
class MinHeap {
  constructor() {
    this.heap = [null];
  }
    
  // insert()  
  // removeSmallest()
  // sort()
  // peek()
}
```

#### insert

`insert(value)`는 새로운 노드를 삽입하는 메소드이다.

최소 힙이므로 삽입된 노드의 값이 부모 노드보다 작은 값을 가지는 경우, 루트 노드에 도달할 때 까지 비교해가며 부모 노드와 삽입된 노드를 스왑해야한다. 

```javascript
insert(value) {
  this.heap.push(value);

  if (this.heap.length > 2) {
    let index = this.heap.length - 1;

    while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
      if (index >= 1) {
		// 부모 노드와 삽입 노드 스왑
        [this.heap[Math.floor(index / 2)], this.heap[index]] = [
          this.heap[index],
          this.heap[Math.floor(index / 2)],
        ];
		// 인덱스를 감소시켜가며 루트 노드까지 비교
        if (Math.floor(index / 2) > 1) {
          index = Math.floor(index / 2);
        } else {
          break;
        }
      }
    }
  }
```

#### removeSmallest() 

`removeSmallest()`는 최소 힙에서 가장 작은 값을 가지는 노드 즉 루트 노드를 삭제하는 메소드이다.

트리(배열)의 마지막에 위치한 노드를 루트 노드로 할당한 후 마지막에 위치한 노드를 삭제하고 노드의 값에 따라 스왑해 최소 힙의 요건을 갖추어야한다.

```javascript
Smallest() {
  const smallest = this.heap[1];
  if (this.heap.length > 2) {
    // 마지막에 위치한 노드를 루트 노드와 변경
    this.heap[1] = this.heap[this.heap.length - 1];
    // 노드 삭제
    this.heap.splice(this.heap.length - 1);

    // 두 개의 노드만 존재할 때 스왑
    if (this.heap.length === 3) {
      if (this.heap[1] > this.heap[2]) {
        [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
      }
      return smallest;
    }

    let i = 1;
    let left = 2 * i;
    let right = 2 * i + 1;

    // 삭제 후, 루트 노드가 자식 노드들보다 클 때
    while (
      this.heap[i] >= this.heap[left] ||
      this.heap[i] >= this.heap[right]
    ) {
      // 오른쪽 자식 노드가 왼쪽 자식 노드보다 클 때
      if (this.heap[left] < this.heap[right]) {
        // 왼쪽 자식 노드와 부모 노드 스왑
        [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
        // 인덱스 증가시켜 하위 트리 루트 노드 체크
        i = 2 * i;

        // 왼쪽 자식 노드가 오른쪽 자식 노드보다 클 때
      } else {
        // 오른쪽 자식 노드와 부모 노드 스왑
        [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
        // 인덱스 증가시켜 하위 트리 루트 노드 체크
        i = 2 * i + 1;
      }

      // 인덱스 증가시켜 하위 트리 루트 노드 체크
      left = 2 * i;
      right = 2 * i + 1;
      if (this.heap[left] === undefined || this.heap[right] === undefined) {
        break;
      }
    }
  } else if (this.heap.length === 2) {
    this.heap.splice(1, 1);
  } else {
    return null;
  }

  return smallest;
}
```

#### heap sort

```javascript
sort() {
  let result = new Array();
  while (this.heap.length > 1) {
    result.push(this.removeSmallest());
  }
  return result;
}
```

#### peek

`peek()`은 트리의 최솟 값 즉, 루트 노드를 반환하는 메소드이다. 트리가 비어있을 경우 비어있다는 메시지를 반환한다. 

```javascript
peek() {
  const root = this.heap[1];
  return root ? root : 'It is empty!!';
}
```

<br>

### Complete Code

```javascript
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);

    if (this.heap.length > 2) {
      let index = this.heap.length - 1;

      while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          [this.heap[Math.floor(index / 2)], this.heap[index]] = [
            this.heap[index],
            this.heap[Math.floor(index / 2)],
          ];

          if (Math.floor(index / 2) > 1) {
            index = Math.floor(index / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  removeSmallest() {
    const smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;

        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }

        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }

  sort() {
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.removeSmallest());
    }
    return result;
  }

  peek() {
    const root = this.heap[1];
    return root ? root : 'It is empty!!';
  }
}
```

<br>

### Example

```javascript
const mh = new MinHeap();
mh.insert(10);
mh.insert(1);
mh.insert(-5);
mh.insert(999);
mh.insert(121);


mh.removeSmallest() // #1 
mh.heap; // #2
mh.peek();  // #3
mh.sort();  // #4
mh.peek();  // #5
```

```javascript
// output: 

-5 // #1
[null, 1, 10, 121, 999] // #2
1 // #3
[1, 10, 121, 999] // #4
"It is empty!!" // #5
```

<br>

<br>

------

**Reference**

- [Implementing a Complete Binary Heap in JavaScript: The Priority Queue](https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf)
- [Heap Data Structure (max and min)- Beau teaches JavaScript](https://www.youtube.com/watch?v=dM_JHpfFITs)

