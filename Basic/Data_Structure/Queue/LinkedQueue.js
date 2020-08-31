class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor () {
    this.length = 0
    this.first = null
    this.last = null
  }

  get queue () {
    const q = []
    if (!this.length) return q

    let head = this.first
    do {
      q.push(head.data)
      head = head.next
    } while (head)

    return q
  }

  enqueue (val) {
    const node = new Node(val)
    if (!this.length) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }
    this.length++
    return this
  }

  dequeue () {
    if (this.length) {
      const head = this.first
      this.first = this.first.next

      head.next = null
      this.length--
      return head.data
    } else {
      throw new Error('Queue is Empty')
    }
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

