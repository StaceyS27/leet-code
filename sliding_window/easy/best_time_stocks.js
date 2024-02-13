// find max profit when choosing a day to buy vs sell stocks 

// in stock market, want to sell high and buy low so want element on right pointer to be higher than left 
// sliding window bc can't count previous days. (may have found higher price before to sell but can only sell after buying)
// need to move both pointers forward 

function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let max = 0;

    while(r < prices.length) {
        if(prices[right] < prices[left]) {                  // gives it a new start of the window at original rt position since its smaller 
            left = right
        }

        const window = prices[right] - prices[left]         

        max = Math.max(max, window);
        right++
    }

    return max;
}

// space complexity O(1)
// time complexity O(n)

//___________________________________________________________________________________________

// another way to solve it 

function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0; // If there are fewer than two days, no profit can be made
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // Update the minimum price
        minPrice = Math.min(minPrice, prices[i]);

        // Update the maximum profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

