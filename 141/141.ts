 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return false;
    }

    // If there is a cycle, they will eventually meet.
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

const solve1 = hasCycle;

const solve2 = (head: ListNode | null): boolean => {
    const visited = new Set<ListNode>();

    let curr = head;
    while (curr) {
        if (visited.has(curr)) {
            return true;
        }
        visited.add(curr);
        curr = curr.next;
    }

    return false;
};

export {};
