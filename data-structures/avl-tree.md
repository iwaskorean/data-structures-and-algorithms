# AVL Tree(Adelson-Velsky and Landis Tree)

일반적인 이진 탐색 트리는 검색/삽입/삭제 연산에서 시간 복잡도에서 O(log N)이지만 한 쪽으로 편향된 형태의 이진 탐색 트리에서의 연산은 O(N)의 시간 복잡도를 가진다. 이러한 문제점을 극복하기 위해 개발된 것이 AVL 트리이다.

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

###### ...



<br>

<br>

------

**Reference**

- [AVL Tree in Javascript](https://learnersbucket.com/tutorials/data-structures/avl-tree-in-javascript/)