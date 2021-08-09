# Binary Search Tree(BST)

이진 탐색 트리(binary search tree)란 최대 두 개의 자식 노드를 가질 수 있는 이진 트리의 변형된 형태이다. 이진 트리와의 차이점은 왼쪽 자식 노드는 부모 노드보다 작은 값을, 오른쪽 자식 노드는 부모 노드보다 큰 값을 가진다는 것이다.

![bst](https://res.cloudinary.com/practicaldev/image/fetch/s--mx-V3dBz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/26akpm3rhzebyt66jjuq.jpg)



일반적인 형태의 이진 탐색 트리는 탐색시 시간 복잡도가 O(log N)이지만 노드들이 한 쪽으로 편향된 형태의 경우의 시간 복잡도는 O(N)이다.

<br>

## Implementation of BST

### Node

이진 탐색 트리의 노드는 data를 저장하는 `data`, 왼쪽/오른쪽 자식 노드를 가르키는 `leftChild`, `rightChild` 프로퍼티를 가진다.

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}
```

### Binary Search Tree

```javascript
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert()
  // remove()
  // search()
}
```

#### insert

`insert()` 메소드는 데이터로 새로운 노드를 만들고 빈 트리의 경우 삽입하려는 노드를 루트 노드로 설정한다. 트리에 노드들이 존재하는 경우 `insertNode()` 메소드를 사용해 노드들의 데이터를 비교해 올바른 위치에 노드를 삽입한다.

```javascript
insert(data) {
  let node = new Node(data);

  if (!this.root) {
    this.root = node;
  } else {
    this.insertNode(this.root, node);
  }
}

insertNode(node, newNode) {
  // 삽입 노드의 데이터가 상위 레벨 노드의 데이터보다 작은 경우
  if (node.data > newNode.data) {
    // 상위 레벨 노드의 왼쪽 자식이 없을 경우, 노드를 왼쪽 자식 위치에 삽입
    if (!node.leftChild) {
      node.leftChild = newNode;
    } 
    // 상위 레벨 노드의 왼쪽 자식이 이미 존재하는 경우, 왼쪽 자식과 삽입 노드를 다시 비교
    else {
      this.insertNode(node.leftChild, newNode);
    }
  }
    // 삽입 노드의 데이터가 상위 레벨 노드의 데이터보다 큰 경우
   else {
    if (!node.rightChild) {
      node.rightChild = newNode;
    } else {
      this.insertNode(node.rightChild, newNode);
    }
  }
}
```

#### remove

이진 탐색 트리에서 노드를 삭제할 때의 케이스는 다음과 같다.

- 자식이 없는 리프 노드 삭제 : 삭제 후 부모 노드의 삭제 노드의 대한 참조를 null로 업데이트 해야한다.
- 하나의 자식 노드를 가지고 있는 노드 삭제 : 삭제하려는 노드가 왼쪽 자식을 가지고 있는 경우 하위 트리의 가장 오른쪽 노드를 삭제하려는 노드로 옮겨야 하며, 오른쪽 자식을 가지고 있는 경우 하위 트리의 가장 왼쪽 노드로 옮겨야한다.
- 두 개의 자식 노드를 가지고 있는 노드 삭제 : 삭제하려는 노드를 오른쪽 하위 트리의 최소값을 가진 노드로 대체하고 최소값을 가진 노드를 제거한다. 

```javascript
remove(data) {
	...
}
```

<br>

<br>

------

**Reference**

- [Implementing a Basic Binary Search Tree in JavaScript](https://dev.to/seanwelshbrown/implementing-a-basic-binary-search-tree-in-javascript-57g4)
- [Implementation of Binary Search Tree in Javascript](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)