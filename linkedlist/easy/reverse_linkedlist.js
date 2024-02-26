// reverse the singly linked list - iterative approach 

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

//________________________________________________________________________________________________

// reversing linked list recursively 

// ex: linked like of 1->2->3->4
// will be called recursively with next node until the current head node's next (ex:4) is null
// base case is met so returns head (4)
// will return to the reverseListRecursive call 3 which it did not fullfil yet 
// with every recursive/downward call, that node (ex: 3) was considered the head for that call 
// so head.next is 4 and head.next.next is the next pointer of 4 which will be turned to point now to the head which is 3 (3<-4)
// the arrow was reversed by line 'head.next.next = head'
// in the next line 'head.next = null' the next pointer of 3 for example was changed from going to 4 to null 
// forward connection removed (3->4)
// reversed linked list returned 


    function reverseListRecursive(head) {

        if (head === null || head.next === null) {
            return head;
        }

        const reversedList = reverseListRecursive(head.next);           // call function recusively on the next node until base case above is met and the the nxt pointer on the head is null
                                                                        // after that, starting from the bottom up, the recursive calls are solved 
        head.next.next = head;                                          // example if last node is 5 and it is returned, function called with 4 (the head it was called with). here 5 is connected to 4
        head.next = null;                                               
    
        return reversedList;
    }
    
    // time complexity 
        // O(N) - going through every node in the linked list
    // space complexity 
        // O(N) - no extra data structures used but during recursive calls, call stack space used
        // worst case length of call stack corresponds with length of linked list/number of nodes 