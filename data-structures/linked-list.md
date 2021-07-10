# Linked List

연결 리스트는 배열과 유사한 선형 데이터 구조이다. 그러나 배열의 요소는 연속된 메모리 위치나 인덱스에 저장되는 반면, 연결 리스트의 요소는 그렇지 않다. 또한 연결 리스트는 노드로 구현된 리스트이며 다음 객체를 가르키는 포인터(링크)를 포함한다.

<br>

![i](https://res.cloudinary.com/dvj2hbywq/image/upload/v1590572188/Group_14_5_bvpwu0.png)

연결 리스트의 시작점을 헤드(head)라고 한다. 헤드는 연결 리스트의 첫 노드를 참조하며 연결 리스트의 마지막 노드는 null을 가르킨다. 만약 연결 리스트가 빈 리스트일 경우 헤드는 null 참조이다.

<br>

### Advantage of Linked Lists

연결 리스트는 전체 데이터 구조를 재구성하지 않고도 삭제 및 추가 연산이 가능하다는 장점이 있다. 이것은 배열의 중간 요소의 삭제 및 추가 연산과 비교 했을때 큰 장점이다.

### Disadvantage of Linked Lists

연결 리스트는 검색 속도가 느리다는 단점이 있다. 배열과 다르게 처음 노드부터 액세스하는 순차적인 액세스만 가능하며 데이터 요소에 대한 랜덤한 액세스는 불가하다.

또한 포인터를 저장해야하므로 더 많은 메모리를 소모한다.

<br>

### Types of Linked Lists

연결 리스트는 3가지 종류가 있다.

- 단일 연결 리스트(Singly Linked List) : 다음 노드를 가르키는 하나의 포인터를 포함한 노드로 구성된 연결 리스트이다.
- 이중 연결 리스트(Doubly Linked Lists) : 이전 노드와 다음 노드를 가르키는 두 개의 포인터를 포함한 노드로 구성된 연결 리스트이다.
- 원형 연결 리스트(Circular Linked Lists) : 마지막 노드의 포인터가 null이 아닌 헤드를 가르키며 루프를 형성하는 연결 리스트이다.

<br>

###### https://www.geeksforgeeks.org/implementation-linkedlist-javascript/ 참고해서 구현 내용 및 파일 추가하기(in js)

<br>

<br>

------

**Reference**

- [How to Implement a Linked List in JavaScript](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)

   