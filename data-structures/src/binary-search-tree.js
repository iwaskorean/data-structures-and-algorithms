class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.leftChild === null) {
        node.leftChild = newNode;
      } else {
        this.insertNode(node.leftChild, newNode);
      }
    } else {
      if (node.rightChild === null) {
        node.rightChild = newNode;
      } else {
        this.insertNode(node.rightChild, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return 'It is empty tree!';
    } else if (key < node.data) {
      node.leftChild = this.removeNode(node.leftChild, key);
      return node;
    } else if (key > node.data) {
      node.rightChild = this.removeNode(node.rightChild, key);
      return node;
    } else {
      if (node.leftChild === null && node.rightChild === null) {
        node = null;
        return node;
      }

      if (node.leftChild === null) {
        node = node.rightChild;
        return node;
      } else if (node.rightChild === null) {
        node = node.leftChild;
        return node;
      }

      const aux = this.findMinNode(node.rightChild);
      node.data = aux.data;

      node.rightChild = this.removeNode(node.rightChild, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.leftChild === null) {
      return node;
    } else {
      return this.findMinNode(node.leftChild);
    }
  }

  getRootNode() {
    return this.root;
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.leftChild);
      this.preorder(node.rightChild);
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.leftChild);
      console.log(node.data);
      this.inorder(node.rightChild);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.leftChild);
      this.postorder(node.rightChild);
      console.log(node.data);
    }
  }
}
