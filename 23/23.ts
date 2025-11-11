class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val  = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists === null || lists.length === 0) {
        return null;
    }

    const dummy = new ListNode();
    let tail = dummy;

    const n = lists.length;
    let stop = false;
    while (!stop) {

        let idx = 0;
        let val = Infinity;
        for (let i = 0; i < n; i++) {
            const list = lists[i];
            if (!list) {
                continue;
            }
            if (list.val < val) {
                val = list.val;
                idx = i;
            }
        }

        if (val !== Infinity) {
            lists[idx] = lists[idx].next;
            tail.next = new ListNode(val);
            tail = tail.next;
        }

        stop = true;
        for (const list of lists) {
            if (list) {
                stop = false;
                break;
            }
        }
    }

    return dummy.next;
};

const mergeKLists1 = mergeKLists;

export {};
