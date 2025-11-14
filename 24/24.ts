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

    type ListNodePair = {
        first: ListNode;
        second: ListNode;
    };

    const swap = (l1: ListNode, l2: ListNode): ListNodePair => {
        l1.next = l2.next;
        l2.next = l1;
        return { first: l2, second: l1 };
    }

    let pair = swap(head, head.next);
    const dummy = new ListNode(0, pair.first);

    let curr = pair.second;
    while (curr && curr.next && curr.next.next) {
        const l1 = curr.next;
        const l2 = curr.next.next;
        pair = swap(l1, l2);
        curr.next = pair.first;
        curr = pair.second;
    }

    return dummy.next;
};

const swapPairs1 = swapPairs;

export {};
