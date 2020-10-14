// loop
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 || !l2) return l1 || l2

  const answer = new ListNode()
  let head = answer

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.val = l1.val
      if (l1) l1 = l1.next
    } else {
      head.val = l2.val
      if (l2) l2 = l2.next
    }

    if (!l1 || !l2) {
      head.next = l1 || l2
    } else {
      head.next = new ListNode()
      head = head.next
    }
  }
  return answer
}

// recursion
function mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 || !l2) return l1 || l2

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists2(l1, l2.next)
    return l2
  }
}
