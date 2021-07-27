# Hash Table

해시 테이블은 key-value 쌍으로 데이터를 저장하는 자료구조이다. key를 사용해 value를 검색할 수 있다.

해시 테이블은 해시 함수를 사용해 key를 정수 인덱스로 변환하며, 인덱스는 key-value 쌍을 메모리 내부 어느 위치에 저장할 것인지를 결정한다.

![hash-table](https://www.freecodecamp.org/news/content/images/2021/05/g983.jpg){: width="500" height="500"}

배열에서 삽입/삭제 연산의 평균적인 시간 복잡도가 O(n)인것에 비해 해시 테이블은 O(1)이기 때문에 빠른 삽입/삭제 연산이 가능하다.

<br>

## Implementation of Hash Table

### Hash Table

모든 key-value 쌍은 `table` 프로퍼티에 저장된다.

```javascript
class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
}
```

#### hash()

`hash()`는 해시 함수, 즉 `key`값을 전달받아 인덱스로 변환하는 메소드이다. `charCodeAt()`를 사용해 key 문자의 아스키 코드를 합산해 해시를 생성한다.

```javascript
_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}
```

`HashTable` 클래스에는 127개의 버킷만 존재하므로 해시 값이 버킷 크기를 초과하지 않게 `%` 연산자를 사용해야한다.

```javascript
_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.table.length;
}
```

#### set()

key-value 쌍을 설정하는 메소드이다. 

해시 함수인 `hash()`를 사용해 `index`를 설정한다. 설정한 `index`로 테이블에 `key`와 `value`를 저장한후 `size`를 증가시킨다.

```javascript
set(key, value) {
  const index = this._hash(key);
  this.table[index] = [key, value];
  this.size++;
}
```

#### get()

key 값을 이용해 해시 테이블의  key-value 쌍을 검색하는 메소드이다.

`hash()`를 이용해 `key` 값으로 `index`를 구해 해시 테이블 `index`의  해당하는 `key`, `value`를 반환한다.

```javascript
get(key) {
  const index = this._hash(key);
  return this.table[index];
}
```

#### remove()

key-value 쌍을 삭제하는 메소드이다.

`hash()`를 이용해 `key` 값으로 `index`를 구해 해시 테이블 `index`의 해당하는 key-value쌍을 `undefined`로 변경하고 `size`를 감소시킨다.

```javascript
remove(key) {
  const index = this._hash(key);

  if (this.table[index] && this.table[index].length) {
    this.table[index] = undefined;
    this.size--;
    return true;
  } else {
    return false;
  }
}
```

#### Test

```javascript
const ht = new HashTable();
ht.set("Busan", 300);
ht.set("Seoul", 100);
ht.set("Jeju", 110);

/*

HashTable {table: Array(127), size: 3}
    size: 3
    table: Array(127)
        12: (2) ["Seoul", 100]
        17: (2) ["Jeju", 110]
        124: (2) ["Busan", 300]
	    length: 127

*/


ht.get('Busan'); // ["Busan", 300]

ht.remove("Seoul") // true
ht.get("Seoul") // undefined
```

지금까지 구현한 `HashTable` 클래스 및 메소드들을 테스트해보면 정상적으로 작동하는 것처럼 보인다. 그러나 인덱스가 충돌할 경우 문제가 발생한다.

```javascript
ht.set('nasuB', 30);

/*
HashTable {table: Array(127), size: 4}
    size: 4
    table: Array(127)
        12: undefined
        17: (2) ["Jeju", 110]
        124: (2) ["nasuB", undefined]
		length: 127
*/

ht.get('Busan'); // ["nasuB", 30]
ht.get('nasuB') // ["nasuB", 30]
```

`"Busan"`과 `"nasuB"`는 다른 key 지만 동일한 문자들로 구성되어 같은 해시 값을 가진다. 따라서 같은 값의 인덱스들이 충돌해 해시 테이블의 `["Busan", 300]`의 key-value 쌍이 `["nasuB", 30]`로 변경되는 문제가 발생했다.

<br>

### How to handle index collision

동일한 해시 값으로 인덱스가 충돌하는 경우 같은 인덱스 값을 가지는 key-value 쌍을 두 번째 배열에 저장해야한다.

```javascript
[
    [
		["Jeju", 110]
    ],
    [
        ["Busan", 300],
        ["nasuB", 30]
    ],
]
```

 `set()` 메소드를 수정하면 인덱스 충돌로 인한 key-value 덮어쓰기를 방지할 수 있다. 

```javascript
set(key, value) {
  const index = this._hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      // 동일한 key일 경우, value 업데이트
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    // 새로운 배열로 push 
    this.table[index].push([key, value]);
  } else {
    this.table[index] = [];
    this.table[index].push([key, value]);
  }
  this.size++;
}
```

`get()` 메소드도 key와 쌍을 이루는 value가 반환되도록 수정해야한다.

```javascript
get(key) {
  const target = this._hash(key);
  if (this.table[target]) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[target][i][0] === key) {
        return this.table[target][i][1];
      }
    }
  }
  return undefined;
}
```

`remove()` 메소드도 원하는 key-value의 배열이 제거되도록 수정해야한다.

```javascript
remove(key) {
  const index = this._hash(key);

  if (this.table[index] && this.table[index].length) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        this.size--;
        return true;
      }
    }
  } else {
    return false;
  }
}
```

또한 `display()` 메소드를 추가해 현재 해시 테이블의 사이즈와 데이터들을 콘솔에 출력할 수 있다.

```javascript
display() {
  console.log(`size: ${this.size}`);

  this.table.forEach((values, index) => {
    const chainedValues = values.map(
      ([key, value]) => `[ ${key}: ${value} ]`
    );
    console.log(`${index}: ${chainedValues}`);
  });
}
```

<br>

### Complete Code

```javascript
class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    console.log(`size: ${this.size}`);

    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

```

<br>

### Example

```javascript
const ht = new HashTable();
ht.set("Busan", 300);
ht.set("Seoul", 100);
ht.set("Jeju", 110);
ht.set("nasuB", 30);

ht.get("Busan"); // *1
ht.get("nasuB"); // *2
ht.remove("Seoul") // *3

ht.display() // *4
```

```javascript
// output: 

300 // *1
30 // *2
true // *3

// *4
size: 3
12: 
17: [ Jeju: 110 ]
124: [ Busan: 300 ],[ nasuB: 30 ]
```

<br>

<br>

------

**Reference**

- [JavaScript Hash Table – Associative Array Hashing in JS](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/)