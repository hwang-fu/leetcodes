 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    const dummy = new ListNode();

    let first  = head;
    let second = head.next;
    let third = second.next;

    second.next = first;
    first.next = dummy.next;
    dummy.next = second;

    while (third && third.next) {
        first = third;
        second = third.next;
        third = second.next;

        second.next = first;
        first.next = dummy.next;
        dummy.next = second;
    }

    if (third) {
        third.next = dummy.next;
        dummy.next = third;
    }

    return dummy.next;
};

const solve1 = reverseList;

export {};
