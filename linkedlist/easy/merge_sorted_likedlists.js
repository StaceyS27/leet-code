// given the heads of two sorted lists (list1 and list2),
// merge the two lists into one sorted list
// return the head of the merged linked list 


class ListNode {                                                        // listnode class is defined so that new instance of the class can be created in function
    constructor(val) {
        this.val = val;                                                 // when new instance of class is created, value passed in is the value of the node
        this.next = null;                                               // and initially, the next pointer will be pointing to null 
    }
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();                                       // a dummy node is created with no value. it serves as the starting point for the merged list that will be added to it  
    let current = dummy;                                                // current pointer currently on dummy node 

    while(list1 !== null && list1 !== null) {                           // while list1 and list2 are not pointing to null (which are pointers initially pointing to the heads of the linked lists)
        if(list1.val < list2.val) {
            current.next = list1;                                       // which ever is less, will be where the next pointer of current will be pointing to 
            list1 = list1.next;                                         // the list1 pointer changed to point to next node in original linked list 
        } else {                                                        // list1 and list 2 pointers point to null when there are no more nodes in list 
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next                                          // current pointer keeps moving from dummy node to nodes added to merged list                                       
    }                                                                   // while loop exits when either list1 or list2 pointers pointing to no node 

    if(list1 !== null) {                                                // in that case cannot compare nodes between each list 
        current.next = list1                                            // so the remaining nodes from whichever list's pointer is not pointing to null is appended with merged list                             
    } else if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;                                                  // dummy is the front of the merged list so dummy.next is the head of the merged linked list 
}


// time complexity 
    // O(m + n) - where m and n are the lengths of the input linked list sizes (may be different sizes)
    // the function iterates through both lists once and the runtime is dependent on the number of nodes in both lists 
// space complexity 
    // O(1) - no additional data structures used. just the next pointers of the nodes in both input lists are updated 