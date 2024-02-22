// piles array: length represents number of piles of banana
// elements themselves represent number of bananas per pile 
// have to return the min speed needed to eat all the bananas before the guards return, represented in h hours 
// if a pile has less bananas than the number eaten per hour, will just eat that pile amount for that hr 

function minEatingSpeed(piles, h) {
    let left = 1;                                           // the min speed the monkey can eat the bananas is at 1/hr
    let right = Math.max(...piles);                         // the max speed is the largest amount of banana in one pile
                                                            // will do binary search to find min speed needed to eat it all before guards arrive 
    while(left<right) {
        const mid = Math.floor((right+left)/2);             // mid speed between right and left 
        
        let hourSpent = 0;

        for(let i=0; i<piles.length; i++) {                 // will iterate through the piles array and find the amount of hrs needed to consume bananas based on mid speed
            hourSpent += Math.ceil(piles[i]/mid)            // ex: 10 bananas eaten at 5 bananas an hr (mid) will result in 2 hrs. 
        }                                                   // Math.ceil rounds up 

        if(hourSpent > h) {                                 // if hourspent is greater than the time the guard will come back (h), need to move up left pointer to the avg speed (mid) is higher
            left = mid + 1;                                 // and bananas can be eaten in less time 
        }

        if(hourSpent <= h) {                                // since at hrs spent to eat the bananas at mid speed is at least equal if not less than h, can move right pointer to mid. 
            right = mid;
        }

    }

    return right; 
}


// time complexity O(N * log(M))
    // N is the number of piles in the array 
    // and M i the maximum value in piles array 
        // this is because instead of checking every pile with every speed possible from 1 - max (N * M) to tally up total hours to eat the bananas and compare it to h,
        // the function is checking only some of the possible speeds using binary search - log(M)

// space : O(1)
    // no additional data structure used that takes up more or less space based on input 
