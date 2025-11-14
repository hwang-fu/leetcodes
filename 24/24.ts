 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    const swap = (l1: ListNode, l2: ListNode): ListNode => {
        l1.next = l2.next;
        l2.next = l1;
        return l2;
    }

    const dummy = new ListNode(0, swap(head, head.next));

    let curr = dummy.next.next;
    while (curr.next && curr.next.next) {
        const l1 = curr.next;
        const l2 = curr.next.next;
        curr.next = swap(l1, l2);
        curr = curr.next.next;
    }

    return dummy.next;
};

const swapPairs1 = swapPairs;

export {};
