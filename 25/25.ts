 class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 1) {
    return head;
  }

  const dummy = new ListNode(0, head);
  let prevGroup = dummy;

  while (1) {
    // find the k-th node from prevGroup
    let kth: ListNode | null = prevGroup;
    for (let i = 0; i < k && kth; i++) {
      kth = kth.next;
    }
    // not enough nodes left
    if (!kth) {
      break;
    }

    let nextGroup = kth.next;
    let prev = nextGroup;
    let curr = prevGroup.next;
    while (curr !== nextGroup) {
      const temp = curr!.next;
      curr!.next = prev;
      prev = curr;
      curr = temp;
    }

    const temp = prevGroup.next;
    prevGroup.next = kth;
    prevGroup = temp!;
  }

  return dummy.next;
};

export {};
