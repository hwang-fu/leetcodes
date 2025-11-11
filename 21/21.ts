 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) {
        return null;
    }

    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    const dummy = new ListNode();

    let head = dummy;
    while (list1 && list2) {
        const val1 = list1 ? list1.val : 0;
        const val2 = list2 ? list2.val : 0;
        if (val1 < val2) {
            head.next = new ListNode(val1);
            list1 = list1.next;
        }
        else {
            head.next = new ListNode(val2);
            list2 = list2.next;
        }

        head = head.next;
    }

    if (list1) {
        head.next = list1;
    }
    else if (list2) {
        head.next = list2;
    }

    return dummy.next;
};
export {};
