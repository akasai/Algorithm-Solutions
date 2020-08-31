class CirculerQueue {
  constructor (size) {
    this.q_size = size
    this.q = new Array(this.q_size).fill(undefined)
    this.front = 0
    this.rear = 0
  }

  get isEmpty () {
    return this.front === this.rear
  }

  get isFull () {
    return (this.rear + 1) % this.q_size === this.front
  }

  enqueue (val) {
    if (this.isFull) throw new Error('Queue is Full.')
    this.rear = (this.rear + 1) % this.q_size
    this.q[this.rear] = val
  }

  dequeue () {
    if (this.isEmpty) throw new Error('Queue is Empty.')
    const q = this.q[this.front]
    this.front = (this.front + 1) % this.q_size
    this.q[this.front] = undefined
    return q
  }
}

const q = new CirculerQueue(4)
q.dequeue()       // Error: Queue is Empty.
q.enqueue(1) // [undefined, 1, undefined, undefined]
q.enqueue(2) // [undefined, 1, 2, undefined]
q.enqueue(3) // [undefined, 1, 2, 3]
q.enqueue(4) // Error: Queue is Full.
q.dequeue()       // [undefined, undefined, 2, 3]
q.enqueue(5) // [5, undefined, 2, 3]
q.dequeue()       // [undefined, undefined, 2, 3]
q.enqueue(6) // [5, 6, undefined, 3]

