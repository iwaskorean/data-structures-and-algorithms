# Trie

트라이(trie)란 문자열을 key로 사용하는 배열이나 동적인 Set을 저장하는 트리 자료 구조이며 디지털 트리(digital tree) 또는 접두사 트리(prefix tree)라고도 부른다. 

![trie](https://i1.wp.com/learnersbucket.com/wp-content/uploads/2020/12/learnersbucket.com-1-1.png?w=768&ssl=1)

트라이는 데이터를 효율적으로 저장/관리하고 빠르게 검색(retrieval)할 수 있는 장점이 있다. 

<br>

## Implementation of Trie

### Trie Node

트라이 노드 객체는 `key`, 부모/자식 노드를 참조하는 `parent`와 `children`, 노드가 문자열의 마지막에 위치해있는가를 나타내는 `end`를 프로퍼티로 가진다.

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

트라이는 연결된 노드들로 이루어져 있으며 빈 루트 노드에 연결되는 구조를 가진다.

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

#### search

`search()`는 트라이안에 단어가 포함되어 있는가를 확인하는 메소드이다.

###### search

###### find

###### remove

###### complete code and example

<br>

<br>

------

**Reference**

- [Trie data structure in Javascript](https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/)