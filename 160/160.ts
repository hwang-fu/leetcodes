class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let ptrA : ListNode | null = headA;
  let ptrB : ListNode | null = headB;

  while (ptrA !== ptrB) {
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  return ptrA;
};

function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  const set = new Set<ListNode>();

  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
};

export {};
