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

class MinHeap<T> {
    private data: T[] = [];
    private compare: (a: T, b: T) => number;

    private bubbleUp(idx: number): void {
        const { data, compare } = this;
        while (idx > 0) {
            const parent = (idx - 1) >> 1;
            if (compare(data[idx], data[parent]) >= 0) break;
            [data[idx], data[parent]] = [data[parent], data[idx]];
            idx = parent;
        }
    }

    private bubbleDown(idx: number): void {
        const { data, compare } = this;
        const n = data.length;
        while (true) {
            const l = idx * 2 + 1;
            const r = idx * 2 + 2;
            let smallest = idx;
            if (l < n && compare(data[l], data[smallest]) < 0) {
                smallest = l;
            }
            if (r < n && compare(data[r], data[smallest]) < 0) {
                smallest = r;
            }
            if (smallest === idx) break;
            [data[idx], data[smallest]] = [data[smallest], data[idx]];
            idx = smallest;
        }
    }

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    get size(): number {
        return this.data.length;
    }

    push(value: T): void {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    pop(): T | undefined {
        if (this.data.length === 0) {
            return undefined;
        }

        const top = this.data[0];
        const last = this.data.pop()!;
        if (this.data.length > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return top;
    }
}

const mergeKLists2 = (lists: Array<ListNode | null>): ListNode | null => {
    if (lists === null || lists.length === 0) {
        return null;
    }

    const heap = new MinHeap<ListNode>((a, b) => a.val - b.val);

    for (const list of lists) {
        if (list) heap.push(list);
    }

    const dummy = new ListNode();
    let tail = dummy;

    while (heap.size > 0) {
        const list = heap.pop()!;
        tail.next = list;
        tail = tail.next;

        if (list.next) {
            heap.push(list.next);
        }
    }

    tail.next = null;

    return dummy.next;
};

export {};
