class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length ? this.items.length : 'It is Empty!!';
  }

  print() {
    console.log('Index : Element');
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i} : ${this.items[i]}`);
    }
  }
}
