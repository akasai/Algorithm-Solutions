function printLinkedList (head) {
  console.log(head.data)
  if (!head.next) return
  return printLinkedList(head.next)
}
