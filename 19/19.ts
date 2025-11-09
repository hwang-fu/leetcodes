 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let prev = null;

    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }

    if (prev) {
        prev.next = slow.next;
        return head;
    }
    else {
        return head.next;
    }
};

export {};
