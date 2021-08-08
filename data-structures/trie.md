# Trie

트라이(trie)란 문자열을 key로 사용하는 배열이나 동적 Set을 저장하는 트리 자료 구조이며 디지털 트리(digital tree) 또는 접두사 트리(prefix tree)라고도 부른다. 

![trie](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2020/12/learnersbucket.com-1-1.png?w=768&ssl=1)

트라이는 데이터를 효율적으로 저장/관리하고 빠르게 검색(re**trie**val)할 수 있는 장점이 있다. 

<br>

## Implementation of Trie

### Trie Node

트라이 노드 객체는 `key`, 부모/자식 노드를 참조하는 `parent`와 `children`, 노드가 문자열의 마지막에 위치해있는가를 나타내는 `end`를 프로퍼티로 가진다.

`getWord()` 메소드는 해당 단어 즉, 자식 노드의 key부터 부모 노드의 key까지를 unshift한 `output` 배열을 반환하는 메소드이다.

```javascript
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
```

### Trie

트라이에는 다른 노드를 참조하는 빈 루트 노드가 있다. 여기서 다른 노드란 문자열을 이루고 있는 각 알파벳 값을 포함하고 있는 노드를 의미한다.

트라이는 연결일 이루고 있는 노드들이 빈 루트노드에 연결되는 구조를 가진다.

```javascript
class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  // insert(word)
  // remove(word)
  // contains(word)
  // find(prefix)
}
```

#### insert

`insert()`는 트라이에 새로운 단어(문자열)를 삽입하기 위한 메소드이다.

```javascript
insert(word) {
  // 루트 노드에서 시작
  let node = this.root; 

  // 단어의 모든 문자들을 탐색
  for (let i = 0; i < word.length; i++) {
    // 해당 문자 노드가 자식 노드에 존재하는지 확인
    if (!node.children[word[i]]) {
    // 존재하지 않을 경우, 자식 노드를 생성 
      node.children[word[i]] = new TrieNode(word[i]);

      // 해당 문자 노드의 부모 노드 할당 
      node.children[word[i]].parent = node;
    }

    // 한 트리 레벨 밑으로 이동해서 다시 진행
    node = node.children[word[i]];

    // 마지막 문자일 경우 end 플래그 true로 변경
    if (i === word.length - 1) {
      node.end = true;
    }
  }
}
```

#### contain

`contain()`은 트라이에 해당하는 단어(문자열)가 포함되어있는가를 확인하는 메소드이다.

```javascript
contain(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    // 노드의 자식 노드 중 단어의 문자를 포함하는 노드가 있을 경우
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
```

#### find

`find()`는 해당하는 접두사(prefix)를 포함한 모든 단어를 찾는 메소드이다.

```javascript
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

  findAllWords(node, output);
  return output;
}

findAllWords(node, arr) {
  // 노드가 단어에 존재할 경우 output으로 unshift
  if (node.end) {
    arr.unshift(node.getWord());
  }

  // 자식 노드들에 반복하며 재귀 호출
  for (let child in node.children) {
    findAllWords(node.children[child], arr);
  }
}
```

#### remove

`remove()`는 노드 삭제를 위한 메소드이다. 키가 포함된 자식 노드가 존재할 수 있기 때문에 키에 해당하는 노드를 직접적으로 제거하는 것이 아니라 해당 노드를 찾아 값을 `null`로 바꾼다. 그러나 노드에 자식 노드가 존재하지 않거나 자식들의 값이 모두 `null`일 경우 전체 노드를 삭제할 수 있다.

```javascript
remove(word) {
  let root = this.root;
 
  if (!word) {
    return 'It is not a word.';   
  }
 
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
```

<br>

### Complete Code

```javascript
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
    let node = this.root; 

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
     
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }
    return node.end;
  }

  find(prefix) {
    let node = this.root;
    let output = [];

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }

    const findAllWords = (node, arr) => {
      if (node.end) {
        arr.unshift(node.getWord());
      }

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
```

<br>

### Example

```javascript
const trie = new Trie();

trie.insert('apple');
trie.insert('application');
trie.insert('apollo');
trie.insert('apoptosis');

trie.find('ap'); // #1
trie.find('app'); // #2

trie.contain('application'); // #3

trie.remove('apple');
trie.find('app'); // #4
```

```javascript
// Output:

["apoptosis", "apollo", "application", "apple"] // #1
["application", "apple"] // #2

true // #3

["application"] // #4
```

<br>

<br>

------

**Reference**

- [Trie data structure in Javascript](https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/)