# Linked List

연결 리스트는 배열과 유사한 선형 데이터 구조이다. 그러나 배열의 요소는 연속된 메모리 위치나 인덱스에 저장되는 반면, 연결 리스트의 요소는 그렇지 않다. 또한 연결 리스트는 노드로 구현된 리스트이며 다음 객체를 가르키는 포인터(링크)를 포함한다.

<br>

![i](https://res.cloudinary.com/dvj2hbywq/image/upload/v1590572188/Group_14_5_bvpwu0.png)

연결 리스트의 시작점을 헤드(head)라고 한다. 헤드는 연결 리스트의 첫 노드를 참조하며 연결 리스트의 마지막 노드는 null을 가르킨다. 만약 연결 리스트가 빈 리스트일 경우 헤드는 null 참조이다.

<br>

### Advantage of Linked Lists

연결 리스트는 전체 데이터 구조를 재구성하지 않고도 삭제 및 추가 연산이 가능하다는 장점이 있다. 이것은 배열의 중간 요소의 삭제 및 추가 연산과 비교 했을때 큰 장점이다.

### Disadvantage of Linked Lists

연결 리스트는 검색 속도가 느리다는 단점이 있다. 배열과 다르게 처음 노드부터 액세스하는 순차적인 액세스만 가능하며 특정 요소에 대해 랜덤한 액세스는 불가하다.

또한 포인터를 저장해야하므로 많은 메모리를 소모한다.

<br>

### Types of Linked Lists

연결 리스트는 3가지 종류가 있다.

- 단일 연결 리스트(Singly Linked List) : 다음 노드를 가르키는 단일 포인터를 포함한 노드로 구성된 연결 리스트이다.
- 이중 연결 리스트(Doubly Linked Lists) : 이전 노드와 다음 노드를 가르키는 두 개의 포인터를 포함한 노드로 구성된 연결 리스트이다.
- 원형 연결 리스트(Circular Linked Lists) : 마지막 노드의 포인터가 null이 아닌 헤드를 가르키며 루프를 형성하는 연결 리스트이다.

<br>

## Implemetation of Linked List

### Node

`Node` 클래스는 `element`와 `next`, 두 개의 프로퍼티를 가지며 `element`는 constructor를 이용해 데이터를 저장하며 `next`는 null 값으로 초기화된다. 

```javascript
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}
```

### Linked List

`LInkedList` 클래스는 `head`와 `size` 두 개의 프로퍼티를 가지며 `head`는 리스트의 첫 번째 노드를 저장하고 `size`는 리스트내의 노드의 수를 나타낸다.

```javascript
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    
    // 생성, 삽입, 삭제의 기능을 가진 내부 함수들
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
 
    // helper 메소드
    // isEmpty
    // size_Of_List
    // PrintList
}
```

#### add(element)

리스트 끝에 새로운 요소를 추가하는 메소드이다.

만약 리스트가 비어있을 경우 추가되는 요소가 헤드가 되며 리스트가 비어있지 않은 경우에는 리스트 끝에 요소를 추가한다.

```javascript
add(element)
{
    // 새로운 노드 생성
    var node = new Node(element);
 
	// 현재 노드 저장
    var current;
 
    // 만약 리스트가 비어있을 경우 추가하는 새로운 노드를 헤드로 설정
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
 
        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }
    this.size++;
}
```

#### InsertAt(element, index)

리스트내의 특정 인덱스에 요소를 삽입(중간 삽입)하는 메소드이다.

```javascript
insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        // 새로운 노드 생성
        var node = new Node(element);
        var curr, prev;
 
        curr = this.head;
 
        // 0번 인덱스에 추가하는 경우
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
 
			// 삽입하려는 인덱스 위치를 찾기위한 반복문
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // 요소 추가
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}
```

#### removeFrom(index)

리스트내의 특정 인덱스의 요소를 제거 후 반환하는 메소드이다.

삭제 시 아래와 같은 3가지 조건에 따라 삭제가 실시된다.

- 삭제하려는 인덱스가 0 일 경우 헤드를 제거하고 다음에 위치한 노드를 헤더로 설정한다. 
- 삭제하려는 인덱스가 size-1이면 리스트의 마지막 요소를 제거하고 prev를 마지막 요소로 설정한다.
- 삭제하려는 인덱스가 0에서 size-1일 경우 prev와 현재 노드를 사용해 요소를 제거한다.

```javascript
removeFrom(index)
{
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;
 
        // 첫번째 요소를 삭제할 경우
        if (index === 0) {
            this.head = curr.next;
        } else {
            // 삭제하려는 요소의 위치를 찾기 위한 반복문
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
 
            // 요소 삭제
            prev.next = curr.next;
        }
        this.size--;
 
        // 삭제한 요소 반환
        return curr.element;
    }
}
```

#### removeElement(element)

리스트에서 특정 요소를 제거하는 메소드이다. 제거할 요소를 찾지 못할 경우 -1을 반환한다.

```javascript
removeElement(element)
{
    var current = this.head;
    var prev = null;
 
    while (current != null) {
        // 반복문을 통해 제거할 요소를 리스트에서 찾고
        // 제거 후 true 반환
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    // 찾지못할 경우 -1 반환
    return -1;
}
```

<br>

### Complete Code

```javascript
class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);
 
        var current;
 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 
            while (current.next) {
                current = current.next;
            }
 
            current.next = node;
        }
        this.size++;
    }
 
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            var node = new Node(element);
            var curr, prev;
 
            curr = this.head;
 
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
 
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
 
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
 
                prev.next = curr.next;
            }
            this.size--;
 
            return curr.element;
        }
    }
 
    removeElement(element) {
        var current = this.head;
        var prev = null;
 
        while (current != null) {
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
 
 
    // 특정 요소의 인덱스를 찾기 위한 helper 메소드
    indexOf(element) {
        var count = 0;
        var current = this.head;
 
        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
 
        return -1;
    }
 
	// 리스트가 비어있는지를 확인하는 helper 메소드
    isEmpty() {
        return this.size == 0;
    }
 
    // 리스트의 size를 콘솔에 출력하는 helper 메소드
    size_of_list() {
        console.log(this.size);
    }
 
 
    // 리스트의 아이템들을 콘솔에 출력하는 helper 메소드
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
 
}
```

<br>

### Example

아래의 코드는 구현한 Node, Linked List 클래스를 이용해 실제로 연결 리스트를 생성하고 요소를 삽입/삭제하는 예제이다.

```javascript
var ll = new LinkedList();
 
console.log(ll.isEmpty());
 
ll.add(10);
 
// prints 10
ll.printList();
 
// returns 1
console.log(ll.size_of_list());
 
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
 

ll.printList(); // returns 10 20 30 40 50
 
console.log("is element removed ?" + ll.removeElement(50));
 
// prints 10 20 30 40
ll.printList();
 
// returns 3
console.log("Index of 40 " + ll.indexOf(40));
 
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);
 
ll.printList();
 
// returns false
console.log("is List Empty ? " + ll.isEmpty());
 
console.log(ll.removeFrom(3));
 
// prints 10 20 60 40
ll.printList();
```



```javascript
// Output:
 true
 10
 1
 undefined
 10 20 30 40 50
 is element removed ?50
 10 20 30 40
 Index of 40 3
 10 20 60 30 40
 is List Empty ? false
 30
 10 20 60 40
```

<br>

<br>

------

**Reference**

- [How to Implement a Linked List in JavaScript](https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/)

- [Implementation of LinkedList in Javascript](https://www.geeksforgeeks.org/implementation-linkedlist-javascript/)

   