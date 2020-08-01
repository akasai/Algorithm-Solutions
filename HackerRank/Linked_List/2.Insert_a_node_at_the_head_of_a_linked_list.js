/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead (head, data) {
  const n = new SinglyLinkedListNode(data)
  n.next = head
  return n
}
