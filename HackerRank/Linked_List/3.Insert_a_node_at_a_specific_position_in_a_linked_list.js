function insertNodeAtPosition (head, data, position) {
  let tmp = head
  let beforeNode = null
  while (true) {
    if (!position) {
      const node = new SinglyLinkedListNode(data)
      beforeNode.next = node
      node.next = tmp
      break
    }
    position--
    beforeNode = tmp
    tmp = tmp.next
  }
}
