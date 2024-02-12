// find the max area for a water container given the vertical lines height in the height array
// and the ith position as the x axis of the line on a graph 


function maxArea(height) {
    let l = 0                                                   // good to initialize pointers on opposite sides so you  have the widest width and can maximize area 
    let r = height.length -1 

    let maxArea = 0

    while(l<r){
        const len = r - l; 
        const width = Math.min(height[r], height[l]);           // top cannot be slanted so need to match smaller height 
        const area = len * width;

        maxArea = Math.max(maxArea, area);                      // if the area calculated is greater than current maxArea, will reeplace it 

        if(height[l] < height[r]){                              // try to keep the greatest height so will move pointer whose height is smaller 
            l++                                                 // so to maximize the area 
        } else {
            r--
        }
    }

    return maxArea; 
    
};

// time complexity: O(n)
// space complexity: O(1)