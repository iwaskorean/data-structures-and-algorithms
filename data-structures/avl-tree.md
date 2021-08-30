# AVL Tree(Adelson-Velsky and Landis Tree)

일반적인 이진 탐색 트리는 검색/삽입/삭제 연산에서 시간 복잡도가 O(log N)이지만 한 쪽으로 편향된 형태의 이진 탐색 트리에서의 연산은 O(N)의 시간 복잡도를 가진다. 이러한 문제점을 극복하기 위해 개발된 것이 AVL 트리이다.

AVL 트리는 N개의 노드를 가진 트리의 높이를 항상 O(log N)으로 유지하는 균형 유지(self-balancing) 이진 탐색 트리이다. AVL 트리에서의 연산은 항상 O(log N)의 시간 복잡도를 보장한다.

![IMG](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/AVL-Tree-in-Javascript.png?w=768&ssl=1)

AVL 트리의 노드는 -1, 0, +1의 값을 갖는 균형 인수(balance factor)를 가진다. 균형 인수는 해당 노드의 왼쪽 하위 트리 높이에서 오른쪽 하위 트리 높이를 뺀 값이며 트리 균형을 유지하기 위해 균형 인수의 값은 항상 -1, 0 또는 +1 이어야한다.

<br>

## Operation on AVL Tree

### Left Rotation

left rotation은 오른쪽 하위 트리의 높이가 높아 오른쪽 하위 트리의 노드를 왼쪽 하위 트리로 회전시키는 것이다.

|                         initial tree                         |                        left rotation                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![i](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Left-rotate-AVL.png?w=400&ssl=1) | ![i](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Assign-y-as-the-parent-of-x..png?w=400&ssl=1) |

left rotation의 과정은 다음과 같다.

1. Y의 왼쪽 하위 트리가 있는 경우 x를 y의 왼쪽 하위 트리의 부모로 할당한다.
2. X의 상위 트리가 null인 경우, Y를 트리의 루트 노드로 설정한다.
3. 만약 X가 P의 왼쪽 자식인 경우, Y를 P의 왼쪽 자식 노드로 설정한다.
4. 2,3단계 모두 해당되지 않는 경우 Y를 P의 오른쪽 자식 노드로 할당한다.
5. Y를 X의 부모로 설정한다.

<br>

### Right Rotation

right rotation은 왼쪽 하위 트리의 높이가 높아 왼쪽 하위 트리 노드를 오른쪽 하위 트리로 회전시키는 것이다.

|                         initial tree                         |                        right rotation                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Right-Rotate.png?w=400&ssl=1) | ![](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Assign-y-as-the-parent-of-the-right-subtree-of-x.png?w=400&ssl=1) |

right rotation의 과정은 다음과 같다.

1. X의 오른쪽 하위 트리가 있는 경우 Y를 X의 오른쪽 하위 트리의 부모로 할당한다.
2. Y의 부모 노드가 null인 경우 X를 트리의 루트 노드로 설정한다.
3. Y가 P의 오른쪽 자식 노드인 경우, X를 P의 오른쪽 자식으로 설정한다.
4. 2,3단계에 해당되지 않는 경우 X를 P의 왼쪽 자식 노드로 할당한다.
5. X를 Y의 부모로 설정한다.

<br>

### Left-Right Rotation

left-right rotation은 왼쪽 자식 노드에 오른쪽 하위 트리만 존재하는 경우 노드들을 왼쪽으로 회전시킨 다음 오른쪽으로 회전시키는 과정이다.

|                     left rotation on x-y                     |
| :----------------------------------------------------------: |
| ![](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Left-rotate-x-y.png?w=768&ssl=1) |
|                  **right rotation on y-z**                   |
| ![](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Right-rotate-z-y.png?w=768&ssl=1) |

<br>

### Right-Left Rotation

right-left rotation은 오른쪽 자식 노드에 왼쪽 하위 트리만 존재하는 경우 노드들을 오른쪽으로 회전시킨 다음 왼쪽으로 회전시키는 과정이다.

|                    right rotation on x-y                     |
| :----------------------------------------------------------: |
| ![](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Right-rotate-x-y.png?w=768&ssl=1) |
|                   **left rotation on z-y**                   |
| ![](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Left-rotate-z-y-1.png?w=768&ssl=1) |

<br>

### Inserting a node

노드 삽입시 균형 인수가 0인 리프 노드로 삽입된다.

리프 노드로 삽입 후 균형 인수를 계산해 균형 인수가 1보다 큰 경우는 왼쪽 하위 트리의 높이가 오른쪽 하위 트리의 높이보다 큰 경우이므로 right rotation 또는 left-right rotation을 수행한다.

균형 인수가 -1보다 작은 경우 오른쪽 하위 트리의 높이가 왼쪽 하위 트리의 높이보다 큰 경우이므로 left rotation 또는 right-left rotation을 수행한다.

|                       1, initial tree                        |                      2 inserting a node                      |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Add-a-node-in-AVL-Tree.png?w=768&ssl=1) | ![](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Inserting-the-new-node.png?w=768&ssl=1) |

|                   3. update balance factor                   |                        4. final  tree                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Updating-the-balance-factor-after-insertion.png?w=768&ssl=1) | ![](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Final-balanced-tree.png?w=768&ssl=1) |

<br>

### Removing a node

노드 삭제를 삭제하는 케이스는 다음과 같다.

- 삭제하려는 노드가 리프 노드인 경우 별도의 작업 없이 노드를 바로 삭제한다.
- 삭제하려는 노드가 하나의 자식 노드를 가지고 있는 경우 자식 노드와 자리를 바꾼 후 노드를 삭제한다.
- 삭제하려는 노드가 두 개의 자식 노드를 가지고 있는 경우 해당 노드의 오른쪽 하위 트리의 최소값 노드(successor node)를 찾아 삭제하려는 노드로 대체한다.

노드 삽입과 마찬가지로 노드 삭제 후 균형 인수를 업데이트하고 균형 인수에 따라 회전을 통해 트리의 균형을 맞춘다.

|                       1. initial tree                        |                  2. finding successor node                   |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Locating-the-node-to-be-deleted.png?w=768&ssl=1) | ![](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Find-the-successor-node.png?w=768&ssl=1) |

|                         3. replacing                         |                        4. final tree                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| ![](https://i2.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Substitute-the-node-to-be-deleted.png?w=768&ssl=1) | ![](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2021/03/Final-tree-after-deletion-and-rebalancing-the-node.png?w=768&ssl=1) |

<br>

## Implementation of AVL Tree

### Node

```javascript
class Node {
  constructor(item) {
    this.item = item;
    this.height = 1;
    this.leftChild = null;
    this.rightChild = null;
  }
}
```

### AVL Tree

```javascript
class AVLTree {
  constructor() {
    this.root = null;
  }
  
  // getHeight(node) 
  // getBalanceFactor(node) 
  // rightRotate(y) 
  // leftRotate(x) 
  // insert(item) 
  // nodeWithMimumValue(node) 
  // delete(item) 
  // preorder() 
  // inorder() 
  // postorder() 
  
}
```

#### getHeight

`getHeight()`는 노드의 높이를 반환하는 메소드이다.

```javascript
getHeight(node) {
  if (node === null) {
    return 0;
  }

  return node.height;
}
```

#### getBalanceFactor

`getBalanceFactor()`는 노드의 균형 인수를 반환하는 메소드이다.

```javascript
getBalanceFactor(node) {
  if (node == null) {
    return 0;
  }

  return this.getHeight(node.leftChild) - this.getHeight(node.rightChild);
}	
```

#### Rotation

```javascript
rightRotate(y) {
  // X를 Y의 왼쪽 자식으로, X의 오른쪽 자식을 T2로 변경한다.
  let x = y.leftChild;
  let T2 = x.rightChild;
  x.rightChild = y;
  y.leftChild = T2;
  
  // height 업데이트
  y.height =
    Math.max(this.getHeight(y.leftChild), this.getHeight(y.rightChild)) + 1;
  x.height =
    Math.max(this.getHeight(x.leftChild), this.getHeight(x.rightChild)) + 1;

  // X가 새로운 루트 노드가 된다.
  return x;
}

leftRotate(x) {
  // y를 X의 오른쪽 자식으로, X의 오른쪽 자식을 T2로 변경한다.
  let y = x.rightChild;
  let T2 = y.leftChild;
  y.leftChild = x;
  x.rightChild = T2;

  // height 업데이트
  x.height =
    Math.max(this.getHeight(x.leftChild), this.getHeight(x.rightChild)) + 1;
  y.height =
    Math.max(this.getHeight(y.leftChild), this.getHeight(y.rightChild)) + 1;
  return y;
}
```

#### insert

`insert()`는 노드를 삽입하는 메소드이다.

```javascript
insert(item) {
  this.root = this.insertNodeHelper(this.root, item);
}

insertNodeHelper(node, item) {
  // 삽입하려는 위치를 찾아 노드를 삽입한다.
  if (node === null) {
    return new Node(item);
  }
  if (item < node.item) {
    node.leftChild = this.insertNodeHelper(node.leftChild, item);
  } else if (item > node.item) {
    node.rightChild = this.insertNodeHelper(node.rightChild, item);
  } else {
    return node;
  }

  // 각 노드의 균형 인수를 업데이트한다.
  node.height =
    1 +
    Math.max(this.getHeight(node.leftChild), this.getHeight(node.rightChild));

  let balanceFactor = this.getBalanceFactor(node);

  // 노드의 균형 인수가 1보다 큰 경우
  if (balanceFactor > 1) {
    // 노드가 왼쪽 자식 노드보다 작은 경우 right rotation
    if (item < node.leftChild.item) {
      return this.rightRotate(node);

      // 노드가 왼쪽 자식 노드보다 작은 경우
      // 왼쪽 자식 노드를 left rotation 한 후 right rotation
    } else if (item > node.leftChild.item) {
      node.leftChild = this.leftRotate(node.leftChild);
      return this.rightRotate(node);
    }
  }

  // 노드의 균형 인수가 -1보다 작은 경우
  if (balanceFactor < -1) {
    // 노드가 오른쪽 자식보다 큰 경우 right rotation
    if (item > node.rightChild.item) {
      return this.leftRotate(node);

      // 노드가 오른쪽 자식 노드보다 작은 경우
      // 오른쪽 자식을 right rotation 한 후 left rotation
    } else if (item < node.rightChild.item) {
      node.rightChild = this.rightRotate(node.rightChild);
      return this.leftRotate(node);
    }
  }

  return node;
}
```

#### delete

`delete()`는 노드를 삭제하는 메소드이다.

```javascript
delete(item) {
  this.root = this.deleteNodeHelper(this.root, item);
}

deleteNodeHelper(root, item) {
  // 대상이 되는 노드를 찾아 삭제
  if (root == null) {
    return root;
  }
  if (item < root.item) {
    root.leftChild = this.deleteNodeHelper(root.leftChild, item);
  } else if (item > root.item) {
    root.rightChild = this.deleteNodeHelper(root.rightChild, item);
  } else {
    if (root.leftChild === null || root.rightChild === null) {
      let temp = null;

      if (temp == root.leftChild) {
        temp = root.rightChild;
      } else {
        temp = root.leftChild;
      }

      if (temp == null) {
        temp = root;
        root = null;
      } else {
        root = temp;
      }
    } else {
      let temp = this.nodeWithMimumValue(root.rightChild);
      root.item = temp.item;
      root.rightChild = this.deleteNodeHelper(root.rightChild, temp.item);
    }
  }
  if (root == null) {
    return root;
  }

  // 균형 인수 업데이트
  root.height =
    Math.max(
      this.getHeight(root.leftChild),
      this.getHeight(root.rightChild)
    ) + 1;

  let balanceFactor = this.getBalanceFactor(root);

  // 노드의 균형 인수가 1보다 큰 경우
  if (balanceFactor > 1) {
    // 노드의 왼쪽 자식 노드의 균형 인수가 0 이상일 경우 right rotation
    if (this.getBalanceFactor(root.leftChild) >= 0) {
      return this.rightRotate(root);

      // 노드의 왼쪽 자식 노드의 균형 인수가 0 보다 작은 경우
      // 왼쪽 자식 노드 left rotation 후 right rotation
    } else {
      root.leftChild = this.leftRotate(root.leftChild);
      return this.rightRotate(root);
    }
  }

  // 노드의 균형 인수가 -1보다 작은 경우
  if (balanceFactor < -1) {
    // 노드의 오른쪽 자식 노드의 균형 인수가 0 이하일 경우 left rotation
    if (this.getBalanceFactor(root.rightChild) <= 0) {
      return this.leftRotate(root);

      // 노드의 오른쪽 자식 노드의 균형 인수가 0 보다 큰 경우
      // 오른쪽 자식 노드를 right rotation 한 후 left rotation
    } else {
      root.rightChild = this.rightRotate(root.rightChild);
      return this.leftRotate(root);
    }
  }

  return root;
}
```

### Traversal

`preorder()`,  `inorder()`는 전위 순회, 중위 순회로 트리를 순회하는 메소드이다.

```javascript
// 전위 순회
preorder() {
  this.preorderHelper(this.root);
}
preorderHelper(node) {
  if (node) {
    console.log(node.item);
    this.preorderHelper(node.leftChild);
    this.preorderHelper(node.rightChild);
  }
}

// 중위 순회
inorder() {
  this.inorderHelper(this.root);
}
inorderHelper(node) {
  if (node) {
    this.inorderHelper(node.leftChild);
    console.log(node.item);
    this.inorderHelper(node.rightChild);
  }
}
```

###### Note: add postorder

<br>

### Complete Code

```javascript
class Node {
  constructor(item) {
    this.item = item;
    this.height = 1;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (node === null) {
      return 0;
    }

    return node.height;
  }

  getBalanceFactor(node) {
    if (node == null) {
      return 0;
    }

    return this.getHeight(node.leftChild) - this.getHeight(node.rightChild);
  }

  rightRotate(y) {
    let x = y.leftChild;
    let T2 = x.rightChild;
    x.rightChild = y;
    y.leftChild = T2;

    y.height =
      Math.max(this.getHeight(y.leftChild), this.getHeight(y.rightChild)) + 1;
    x.height =
      Math.max(this.getHeight(x.leftChild), this.getHeight(x.rightChild)) + 1;

    return x;
  }

  leftRotate(x) {
    let y = x.rightChild;
    let T2 = y.leftChild;
    y.leftChild = x;
    x.rightChild = T2;

    x.height =
      Math.max(this.getHeight(x.leftChild), this.getHeight(x.rightChild)) + 1;
    y.height =
      Math.max(this.getHeight(y.leftChild), this.getHeight(y.rightChild)) + 1;
    return y;
  }

  insert(item) {
    this.root = this.insertNodeHelper(this.root, item);
  }

  insertNodeHelper(node, item) {
    if (node === null) {
      return new Node(item);
    }
    if (item < node.item) {
      node.leftChild = this.insertNodeHelper(node.leftChild, item);
    } else if (item > node.item) {
      node.rightChild = this.insertNodeHelper(node.rightChild, item);
    } else {
      return node;
    }

    node.height =
      1 +
      Math.max(this.getHeight(node.leftChild), this.getHeight(node.rightChild));

    let balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (item < node.leftChild.item) {
        return this.rightRotate(node);
      } else if (item > node.leftChild.item) {
        node.leftChild = this.leftRotate(node.leftChild);
        return this.rightRotate(node);
      }
    }

    if (balanceFactor < -1) {
      if (item > node.rightChild.item) {
        return this.leftRotate(node);
      } else if (item < node.rightChild.item) {
        node.rightChild = this.rightRotate(node.rightChild);
        return this.leftRotate(node);
      }
    }

    return node;
  }

  nodeWithMimumValue(node) {
    let current = node;
    while (current.leftChild !== null) {
      current = current.leftChild;
    }

    return current;
  }

  delete(item) {
    this.root = this.deleteNodeHelper(this.root, item);
  }

  deleteNodeHelper(root, item) {
    if (root == null) {
      return root;
    }
    if (item < root.item) {
      root.leftChild = this.deleteNodeHelper(root.leftChild, item);
    } else if (item > root.item) {
      root.rightChild = this.deleteNodeHelper(root.rightChild, item);
    } else {
      if (root.leftChild === null || root.rightChild === null) {
        let temp = null;

        if (temp == root.leftChild) {
          temp = root.rightChild;
        } else {
          temp = root.leftChild;
        }

        if (temp == null) {
          temp = root;
          root = null;
        } else {
          root = temp;
        }
      } else {
        let temp = this.nodeWithMimumValue(root.rightChild);
        root.item = temp.item;
        root.rightChild = this.deleteNodeHelper(root.rightChild, temp.item);
      }
    }
    if (root == null) {
      return root;
    }

    root.height =
      Math.max(
        this.getHeight(root.leftChild),
        this.getHeight(root.rightChild)
      ) + 1;

    let balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(root.leftChild) >= 0) {
        return this.rightRotate(root);
      } else {
        root.leftChild = this.leftRotate(root.leftChild);
        return this.rightRotate(root);
      }
    }

    if (balanceFactor < -1) {
      if (this.getBalanceFactor(root.rightChild) <= 0) {
        return this.leftRotate(root);
      } else {
        root.rightChild = this.rightRotate(root.rightChild);
        return this.leftRotate(root);
      }
    }

    return root;
  }

  preorder() {
    this.preorderHelper(this.root);
  }
  preorderHelper(node) {
    if (node) {
      console.log(node.item);
      this.preorderHelper(node.leftChild);
      this.preorderHelper(node.rightChild);
    }
  }

  inorder() {
    this.inorderHelper(this.root);
  }
  inorderHelper(node) {
    if (node) {
      this.inorderHelper(node.leftChild);
      console.log(node.item);
      this.inorderHelper(node.rightChild);
    }
  }
}
```

<br>

### Example

```javascript
const t = new AVLTree();
t.insert(20);
t.insert(5);
t.insert(22);
t.insert(30);
t.insert(100);
t.insert(70);
t.insert(88);

console.log('preorder : ');
t.preorder();

t.delete(88);

console.log('After deletion 88');
console.log('preorder : ');
t.preorder();
```

```javascript
// output: 
preorder : 
30
20
5
22
88
70
100

After deletion 88
preorder : 
30
20
5
22
100
70
```

<br>

<br>

------

**Reference**

- [AVL Tree in Javascript](https://learnersbucket.com/tutorials/data-structures/avl-tree-in-javascript/)