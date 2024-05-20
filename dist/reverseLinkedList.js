"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function reverseLinkedList(head) {
    if (!head)
        return null;
    let current = head; // Create a pointer to the current list
    let prev = null; // Create a new head
    while (current) {
        // Store the next node
        const nextNode = current.next;
        // Assign the current next value to the previous node
        current.next = prev;
        // Move previous up to current
        prev = current;
        // Progress current to the next node
        current = nextNode;
    }
    // Prev is the new head, so we should return it
    return prev;
}
// Space-time complexity
// O(n) time as must traverse the entire list to change all the pointers
// O(1) space we modify the list in place
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
const reversedHead = reverseLinkedList(node1); // 1 -> 2 -> 3 becomes >>>> 3 -> 2 -> 1
let current = reversedHead;
while (current) {
    console.log(current.val);
    current = current.next;
}
