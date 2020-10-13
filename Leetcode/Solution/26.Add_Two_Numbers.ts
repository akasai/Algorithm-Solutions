class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const answer = new ListNode()
  let head = answer
  let up = 0

  while (l1 || l2) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + up

    up = Math.floor(sum / 10)
    head.val = sum % 10

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
    if (l1 || l2) {
      head.next = new ListNode()
      head = head.next
    }
  }

  if (up) head.next = new ListNode(up)
  return answer
}
