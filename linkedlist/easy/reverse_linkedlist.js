// reverse the singly linked list 

// before the head of a linked list is null

function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        const next = curr.next;                 // storing the node at curr.next in a variable bc will disconnect once arrows are reversed 
        curr.next = prev;                       // arrow reversed here. curr.next now pointing to previous 

        prev = curr;                            // prev and curr pointers advanced to curr and next respectively 
        curr = next;
    }

    return prev; 
}

// time complexity 
    // O(N) - will have to iterate through the entire linked list to reverse arrows 
// space complexity 
    // O(1)