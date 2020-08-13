function deleteNode (head, position) {
  if (!position) return head.next
  head.next = deleteNode(head.next, position - 1)
  return head
}
