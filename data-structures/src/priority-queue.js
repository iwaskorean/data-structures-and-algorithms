class QueueElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    let element = new QueueElement(data, priority);

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (element.priority > this.items[i].priority) {
        this.items.splice(i, 0, element);

        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(element);
    }
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
    console.log('Index : Data - Priority');
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i} : ${this.items[i].data} - ${this.items[i].priority}`);
    }
  }
}
