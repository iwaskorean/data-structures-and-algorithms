class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);

    if (this.heap.length > 2) {
      let index = this.heap.length - 1;

      // 삽입된 노드가 부모 노드보다 큰 값을 가질 경우
      while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          // 부모 노드와 삽입된 노드 스왑
          [this.heap[Math.floor(index / 2)], this.heap[index]] = [
            this.heap[index],
            this.heap[Math.floor(index / 2)],
          ];

          // 인덱스를 감소시켜 가며 루트 노드까지 비교
          if (Math.floor(index / 2) > 1) {
            index = Math.floor(index / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  removeSmallest() {
    const smallest = this.heap[1];
    if (this.heap.length > 2) {
      // 마지막에 위치한 노드를 루트 노드와 변경
      this.heap[1] = this.heap[this.heap.length - 1];
      // 노드 삭제
      this.heap.splice(this.heap.length - 1);

      // 두 개의 노드만 존재할 때 스왑
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      // 삭제 후, 루트 노드가 자식 노드들보다 클 때
      while (
        this.heap[i] >= this.heap[left] ||
        this.heap[i] >= this.heap[right]
      ) {
        // 오른쪽 자식 노드가 왼쪽 자식 노드보다 클 때
        if (this.heap[left] < this.heap[right]) {
          // 왼쪽 자식 노드와 부모 노드 스왑
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          // 인덱스 증가시켜 하위 트리 루트 노드 체크
          i = 2 * i;

          // 왼쪽 자식 노드가 오른쪽 자식 노드보다 클 때
        } else {
          // 오른쪽 자식 노드와 부모 노드 스왑
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          // 인덱스 증가시켜 하위 트리 루트 노드 체크
          i = 2 * i + 1;
        }

        // 인덱스 증가시켜 하위 트리 루트 노드 체크
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }

  sort() {
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.removeSmallest());
    }
    return result;
  }

  peek() {
    const root = this.heap[1];
    return root ? root : 'It is empty!!';
  }
}
