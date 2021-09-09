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
