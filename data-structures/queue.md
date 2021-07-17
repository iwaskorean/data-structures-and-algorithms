# Queue

큐(queue)란 무언가를 기다리는 사람들의 대기열처럼 순차적이고 순서가 있는 자료구조이다. 대기열에서 먼저 기다리고 있던 사람이 먼저 나가는 것과 같은 선입 선출(FIFO, First In First Out) 원칙을 따른다.

![q](https://dmitripavlutin.com/2e1aee372cae31a13b0809df4ac606ff/queue-12.svg)*

큐에서 데이터가 들어오는(enqueue) 위치를 테일, 데이터를 삭제나 출력(dequeue)할 때의 데이터의 위치를 헤드라고 한다.

<br>

### The operations on queues

큐에서 이루어지는 작업들은 다음과 같다.

- enqueue : 큐의 가장 뒤 위치에 항목을 삽입한다. 삽입된 항목은 큐의 테일이 된다.
- dequeue : 큐의 가장 앞 항목을 추출한다. 추출된 항목의 다음 항목이 헤드가 된다.
- peek : 큐의 헤드를 읽는다. 
- length : 큐에 포함된 항목의 수를 계산한다.

<br>

###### Implementation of queue

<br>

------

**Reference**

- [How to Implement a Queue in JavaScript](https://dmitripavlutin.com/javascript-queue/)