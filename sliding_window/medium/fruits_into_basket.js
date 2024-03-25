// 904. Fruits into Baskets 

// numbers in fruits array represent different types of fruits
// have to return the max number of fruits that you can pick 
// if you only have 2 baskets and each basket can only hold a single type of fruit
// however, each basket can hold an unlimited number of that 1 particular type of fruit 

// in this problem, the sliding window is used to try to find the window that has the most number of fruits that are only of 2 types 
// the right pointer moves and adds the fruit type/number to the map if it doesnt exist and the map has less than 2 key-value pairs 
// also increases fruitCount which counts for the number of fruits in the current window    
    // at the same time the maxCount is always updated to make sure that it keeps count of that count/window with the most num of fruits that are only of 2 types
// if the map does have the fruit type/number, it still increases fruitcount but also updates the number of fruits in the values section for that fruit type 
// if a type that isnt in the map is encountered and the map already has 2 types in there, the left pointer is moved to contract the window 
// while also removing 1 quantity from that key. important bc can have multiple consecutive fruits of the same type so it doesnt take away that type from the window, 
    // just lowers the number of it present ex: [1,1,1,1,3,4]
    // at this point dont move right pointer yet because has not been added to the map yet bc there was no space for it
    // only when the value for that fruit type is at zero in the hashmap will it be deleted and therefore make room for the addition of another fruit type


function totalFruit(fruits) {
    let left = 0;
    let right = 0;
    let map = new Map();
    let fruitCount = 0;
    let maxCount = 0;

    while(right<fruits.length){
        if(map.size<2 && !map.has(fruits[right])) {
            map.set(fruits[right], 1);
            fruitCount += 1;
            maxCount = Math.max(fruitCount, maxCount);
            right++;
        } else if (map.has(fruits[right])){
            fruitCount+=1;
            map.set(fruits[right], (map.get(fruits[right])+1))
            maxCount = Math.max(fruitCount, maxCount);
            right++
        } else if (map.size===2 && !map.has(fruits[right])){
            map.set(fruits[left], (map.get(fruits[left])-1));
            if(map.get(fruits[left]) === 0) {
                map.delete(fruits[left])
            }
            left++;
            fruitCount-=1;
        }
    }

    return maxCount;
}

// time complexity - O(n)
    // entire array iterated once 

// space complexity - O(1)
    // although a hashmap is used, its max size is 2 
    // so space is constant and not dependent on input array's size 