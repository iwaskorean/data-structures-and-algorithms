# Graph

그래프란 정점(vertex)과 간선(edge)으로 이루어진 자료 구조이다. 방향(directed) 그래프, 무방향(undirected) 그래프 모두 존재하며 정점을 연결하는 간선은 정점에서 다른 정점으로 이동하기위한 가중치를 포함할 수 있다.

<br>

### Graph terminology

![](https://www.educative.io/api/page/5689736497725440/image/download/4935435013849088)

그래프에 사용되는 핵심 용어는 다음과 같다.

- 정점의 차수 : 하나의 정점에 연결된 간선의 수
- 진입 차수(in-degree) : 외부 정점에서 들어오는 간선의 수
- 진출 차수(out-degree) : 외부 정점으로 향하는 간선의 수
- 인접(adjacency) : 두 정점을 연결하는 간선이 있는 경우 두 정점은 인접하다라고 한다.
- 병렬 간선(parallel edges) : 무방향 그래프에서 병렬 간선이란 끝 정점이 같아 평행한 간선을 말한다. 방향 그래프에서 병렬 간선은 시작점과 목적점이 같은 간선을 말한다.
- 루프(self loop) : 시작점와 목적점이 동일한 정점일때 발생한다.
- Isolated vertex : 간선이 없는 정점을 말한다.

<br>

### Real-world uses of graphs

그래프는 다음과 같은 프로그램에서 핵심적인 역할을 한다.

- GPS
- 신경망
- P2P 네트워크
- 검색 엔진 크롤러
- SNS 웹 사이트
- 가비지 컬렉션

예를 들어, 페이스북에서 사용자는 정점으로 표현될 수 있다. 이 사용자와 다른 사용자의 연결을 간선으로 표현할 수 있으며 각 정점은 아이디, 이름, 위치와 같은 사용자 정보를 포함한다.

구글 지도도 또한 그래프를 기반으로 네비게이션 시스템을 구축한다. 두 개 이상의 도로가 교차되는 곳을 정점으로, 두 꼭지점을 연결하는 도로를 간선으로 간주한다. 이를 이용해 두 정점 사이의 최단 경로를 계산할 수 있다.

<br>

## Types of Graphs

그래프는 무방향 그래프와 방향 그래프 두 종류가 있다.

![](https://www.educative.io/api/page/5689736497725440/image/download/5182824727445504)

### Undirected Graph

무방향 그래프의 간선은 양방향이며 (0,1) 쌍의 경우 0과 1 사이에 방향 없이 간선이 존재함을 의미한다. 양방향이므로 0에서 1 또는 그 반대로 갈 수 있다.

n개의 정점이 있는 무방향 그래프에서의 최대 간선 수는 n(n-1)/2이다.

<br>

### Directed Graph

방향 그래프에서 (0,1) 쌍은 0에서 1로 향하는 간선이 있음을 의미한다. 간선의 방향이 존재하므로 무방향 그래프와 다르게 반대 방향으로는 갈 수 없다.

n개의 정점이 있는 방향 그래프에서의 최대 간선수는 n(n-1)/1이다.

<br>

## Types of Graph representations

그래프를 표현하기 위한 방법으로 인접 행렬(adjacency matrix)과 인접 리스트(adjacency list)가 있다.

<br>

### Adjacency Matrix

![](https://www.educative.io/api/page/5689736497725440/image/download/6477995603656704)

인접 행렬은 각 원소가 0 또는 1의 값으로 이루어진 2차원 행렬이다. 원소의 값이 1인 경우 해당 정점 사이에 간선이 존재한다는 것을 의미한다.

인접 행렬에서 두 정점이 연결되었는지 확인하기 위한 시간 복잡도는 O(1) 이며 한 정점에 연결된 모든 정점들을 확인하기 위한 시간 복잡도는 O(V)이다.

인접 행렬을 프로그램이 필요로하는 리소스의 양을 나타내는 공간 복잡도로 나타내면 O(V^2)이다.

<br>

### Adjacency List

![](https://www.educative.io/api/page/5689736497725440/image/download/6254147344007168)

인접 리스트에서의 연결 리스트를 사용해 두 정점의 간선을 저장한다. 배열의 크기는 정점의 수와 같으며 각 인덱스는 특정 정점을 나타낸다. 그래프에 새로운 정점이 추가되면 추가되는 정점에 대한 배열이 추가된다.

인접 리스트에서 두 정점이 연결되었는지 확인하기 위한 시간 복잡도는 O(V) 이며 한 정점에 연결된 모든 정점들을 확인하기 위한 시간 복잡도는 O(E)이다.

인접 리스트의 공간 복잡도는 O(V+E)이다.

<br>

## Implementation of graph

### Undireted Graph

```javascript
class UndirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(v) {
    this.edges[v] = {};
  }

  addEdge(v1, v2, w = 0) {
    this.edges[v1][v2] = w;
    this.edges[v2][v1] = w;
  }

  removeEdge(v1, v2) {
    if (this.edges[v1] && this.edges[v1][v2]) {
      delete this.edges[v1][v2];
    }

    if (this.edges[v2] && this.edges[v2][v1]) {
      delete this.edges[v2][v1];
    }
  }

  removeVertex(v) {
    for (const adjVertex in this.edges[v]) {
      this.removeEdge(adjVertex, v);
    }
    delete this.edges[v];
  }
}
```

<br>

### Directed Graph

```javascript
class DirectedGraph {
  constructor() {
    this.edges = {};
  }

  addVertex(v) {
    this.edges[v] = {};
  }

  addEdge(v1, v2, w = 0) {
    this.edges[v1][v2] = w;
  }

  removeEdge(v1, v2) {
    if (this.edges[v1] && this.edges[v1][v2]) {
      delete this.edges[v1][v2];
    }
  }

  removeVertex(v) {
    for (const adjVertex in this.edges[v]) {
      this.removeEdge(adjVertex, v);
    }
    delete this.edges[v];
  }
}
```

<br>

### Example

#### Undirected Graph

```javascript
const g = new UndirectedGraph();

g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);
g.addVertex(6);

g.addEdge(2, 1, 10);
g.addEdge(1, 6);
g.addEdge(4, 3, 1);
g.addEdge(3, 2, 100);
g.addEdge(5, 1, 20);

console.log(g); // #1

g.removeEdge(1, 2);
g.removeVertex(6);

console.log(g); // #2
```

```javascript
// output: 

// #1
edges:
1: {2: 10, 5: 20, 6: 0}
2: {1: 10, 3: 100}
3: {2: 100, 4: 1}
4: {3: 1}
5: {1: 20}
6: {1: 0}

// #2
edges:
1: {5: 20, 6: 0}
2: {3: 100}
3: {2: 100, 4: 1}
4: {3: 1}
5: {1: 20}
```

#### Directed Graph

```javascript
const g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addEdge('A', 'C', 5);
g.addEdge('B', 'A', 1);
g.addEdge('C', 'B', 30);

console.log(g); // #1

g.removeEdge('B', 'A', 1);
g.removeVertex('C');

console.log(g); // #2
```

```javascript
// output: 

// #1
edges:
A: {C: 5}
B: {A: 1}
C: {B: 30}
D: {}

// #2
edges:
A: {C: 5}
B: {}
D: {}
```

<br>

<br>

------

**Reference**

- [Data Structures 101: introducing graphs in JavaScript](https://www.educative.io/blog/data-structures-101-graphs-javascript)
