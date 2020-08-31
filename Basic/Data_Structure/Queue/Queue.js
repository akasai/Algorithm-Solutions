class Queue {
  constructor (size) {
    this.q_size = size
    this.q = []
  }

  get is_Empty () {
    return !this.q.length
  }

  get is_Full () {
    return this.q.length === this.q_size
  }

  enqueue (val) {
    if (this.is_Full) throw new Error('Queue is Full.')
    this.q.push(val)
  }

  dequeue () {
    if (this.is_Empty) throw new Error('Queue is Empty.')
    return this.q.shift()
  }
}

const q = new Queue(4)
q.enqueue(1) // [1]
q.enqueue(2) // [1,2]
q.enqueue(3) // [1,2,3]
q.enqueue(4) // [1,2,3,4]
q.enqueue(5) // Error: Queue is Full.
q.dequeue()       // [2,3,4]
q.dequeue()       // [3,4]
q.dequeue()       // [4]
q.dequeue()       // []
q.dequeue()       // Error: Queue is Empty.


