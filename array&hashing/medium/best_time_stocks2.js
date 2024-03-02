// Best Time to Buy and Sell Stock II

// find max profit given an array with prices of a stock on the ith day
// can buy and sell multiple times
// solved by checking price next day and if the price went up, sell for a profit

// don't need to use sliding window like version 1 of the problem 
// because even if the price continues to climb, checking the difference every day if increasing
// and adding it together for profit will yield same results
// ex: [1,2,3] taking the diff between index 0 and 1 and then again 1 and 2  (1 and 1 again)
// has the same result as taking the difference between index 0 and 2 (2)

function maxProfit(prices) {
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++) {
        if(prices[i] < prices[i+1]) {
            maxProfit += prices[i+1] - prices[i]
        }
    }

    return maxProfit;
}

// time complexity - O(n)
    // iterates through array once
    // time dependent on size of input array (n)
// sapce space complexity- O(1)
    // variable maxprofit's size not dependent on size of input array