class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedStack {
  constructor () {
    this.head = null
    this.length = 0
  }

  get isEmpty() {
    return this.length === 0
  }

  push(data) {
    if (!this.head) {
      this.head = new Node(data)
    } else {
      let current = this.head
      while(current.next) current = current.next
      current.next = new Node(data)
    }

    this.length++
  }

  pop() {
    if (this.isEmpty) throw new Error('Stack is Empty')

    let current = this.head
    let prev = null

    while (current.next) {
      prev = current
      current = current.next
    }

    if (prev) prev.next = null
    else this.head = null

    this.length--
    return current
  }
}

const stack = new LinkedStack()
stack.push(1) // [1]
stack.push(2) // [1, 2]
stack.push(3) // [1, 2, 3]
stack.push(4) // [1, 2, 3, 4]
stack.pop()   // [1, 2, 3]
stack.pop()   // [1, 2]
stack.pop()   // [1]
stack.pop()   // []
stack.pop()   // Error: Stack is Empty

