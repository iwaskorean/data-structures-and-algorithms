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
    this.preOrderHelper(this.root);
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
