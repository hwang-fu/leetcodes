/**
 * Definition for singly-linked list.
 */
 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let node = dummy;

    let carry = 0;
    while (l1 || l2) {
        const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        node.next = new ListNode(digit);
        node = node.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry !== 0) {
        node.next = new ListNode(carry);
    }

    return dummy.next;
};

const solution1 = addTwoNumbers;

export {};
