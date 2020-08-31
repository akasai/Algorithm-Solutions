class Stack {
  constructor (size) {
    this.s_size = size
    this.s = new Array(size).fill(undefined)
    this.top = 0
  }

  get isEmpty () {
    return this.top === 0
  }

  get isFull () {
    return this.top === this.s_size
  }

  push (val) {
    if (this.isFull) throw new Error('Stack is Full.')
    this.s[this.top++] = val
  }

  pop () {
    if (this.isEmpty) throw new Error('Stack is Empty')
    const ret = this.s[this.top]
    this.s[--this.top] = undefined
    return ret
  }

  peek () {
    return this.s[this.top - 1]
  }
}

const stack = new Stack(4)
stack.push(1) // [1]
stack.push(2) // [1, 2]
stack.push(3) // [1, 2, 3]
stack.push(4) // [1, 2, 3, 4]
stack.push(5) // Error: Stack is Full
stack.pop()   // [1, 2, 3]
stack.pop()   // [1, 2]
stack.pop()   // [1]
stack.pop()   // []
stack.pop()   // Error: Stack is Empty

