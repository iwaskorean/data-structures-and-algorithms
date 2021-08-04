class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  getWord() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join('');
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let node = this.root; // 루트 노드에서 시작

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];

      if (i === word.length - 1) {
        node.end = true;
      }
    }
  }

  contain(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      // 루트의 자식 노드중 단어의 첫 문자를 포함하는 자식 노드가 있을 경우
      if (node.children[word[i]]) {
        // 그 자식 노드로 이동
        node = node.children[word[i]];
      } else {
        // 존재하지 않을 경우 false 반환
        return false;
      }
    }
    return node.end;
  }

  find(prefix) {
    let node = this.root;
    let output = [];

    // contain()과 같은 프로세스
    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // 존재하지 않을 경우 빈 객체 반환
        return output;
      }
    }

    const findAllWords = (node, arr) => {
      // 노드가 단어에 존재할 경우 output으로 push
      if (node.end) {
        arr.unshift(node.getWord());
      }

      // 자식 노드들에 반복하며 재귀 호출
      for (let child in node.children) {
        findAllWords(node.children[child], arr);
      }
    };

    findAllWords(node, output);
    return output;
  }

  remove(word) {
    let root = this.root;

    if (!word) return 'It is not a word.';

    const removeWord = (node, word) => {
      if (node.end && node.getWord() === word) {
        let hasChildren = Object.keys(node.children).length > 0;

        if (hasChildren) {
          node.end = false;
        } else {
          node.parent.children = {};
        }

        return true;
      }

      for (const key in node.children) {
        removeWord(node.children[key], word);
      }

      return true;
    };

    removeWord(root, word);
  }
}
