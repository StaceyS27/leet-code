// 904. Fruits into Baskets 

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