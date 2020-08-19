function reverse (head) {
  if (head.next === null) return head
  const node = reverse(head.next)
  head.next.next = head
  head.next = null
  return node
}
