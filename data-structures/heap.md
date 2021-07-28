# Heap(binary heap)

힙(heap)이란 노드가 자식 노드의 값에 따라 정렬되는 트리 형태의 데이터구조이다. 부모 노드는 항상 자식 노드의 값 보다 크거나 작아야한다. 부모 노드가 자식 노드보다 크거나 같은 값을 가지는 힙을 최대 힙(max-heap), 자식 노드보다 작거나 같은 값을 가지는 힙을 최소 힙(min-heap)이라고 한다.

이진 힙(binary heap)이란 부모 노드가 2개 이하의 자식 노드를 가질 수 있는 힙의 한 종류이다. 또한 이진 힙은 마지막 레벨을 제외한 모든 레벨의 노드들이 채워진 형태의 완전이진트리여야하며 노드들은 왼쪽부터 정렬되어야한다.

노드 추출 시 가장 높은 우선 순위(higheset priority)를 가지는 최상단에 위치한 노드만 추출할 수 있다.

![i](https://miro.medium.com/max/720/1*xJOocKUumjmBK2SXcPHHvA.jpeg)

이진 힙은 트리의 효율적인 삽입 연산이 가능하며 데이터들의 순서, 즉 우선순위(priority)를 유지하기 때문에 우선순위 큐(priority queue)를 구현하는데 사용할 수 있다.

<br>

## Implementation of binary heap

이진 힙은 구현시 배열을 사용해 트리를 표현한다. 각 노드의 인덱스가 가지는 특징은 다음과 같다.

- 트리의 루트 노드는 배열의 0번 인덱스가 아닌 1번 인덱스에 위치한다.
- n번 인덱스에 위치한 노드의 왼쪽 자식 노드는 2n번 인덱스에 위치한다.
- n번 인덱스에 위치한 노드의 오른쪽 자식 노드는 2n+1번 인덱스에 위치한다.
- n번 인덱스에 위치한 노드의 부모 노드는 n/2번 인덱스에 위치한다.

<br>

###### implementing max and min heap ...

<br>

------

**Reference**

- [Implementing a Complete Binary Heap in JavaScript: The Priority Queue](https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf)