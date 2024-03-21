// Find All Anagrams in a String

//** so far only passes 48/65 cases

var findAnagrams = function (s, p) {
    // iterate through s while r pointer < s.length 
    // sort characters within window (variable to store it)
    // also sort p 
    // when window equals size of p then compare the two strings 
    // if equal, then add to an array the index where the left pointer is 
    // increase rt and left pointer by one 
    // also empty the string variable
    // if not equal i still have to increase pointer by one both 
    // and empty string variable 

    //other way using hash 
    let smap = new Map()
    let pmap = new Map()

    for (let i = 0; i < p.length; i++) {
        if (!pmap.has(p[i])) {
            pmap.set(p[i], 1)
        } else {
            pmap.set(p[i], (pmap.get(p[i]) + 1))
        }
    }

    let left = 0;
    let right = 0;
    let result = []

    while (right < s.length) {
        if (!smap.has(s[right])) {
            smap.set(s[right], 1)
        } else {
            smap.set(s[right], (smap.get(s[right]) + 1))
        }

        let windowSize = (right - left) + 1;

        if (windowSize === p.length) {
            let count = 0;

            for (let key of smap.keys()) {
                if (pmap.has(key) && smap.get(key) === pmap.get(key)) {
                    count++
                } else {
                    break;
                }
            }

            if (count === smap.size) {
                result.push(left)
            }

            smap.set(s[left], (smap.get(s[left]) - 1))

            if (smap.get(s[left]) === 0) {
                smap.delete(s[left])
            }
        }


        if (windowSize === p.length) {
            left++
            right++
        } else {
            right++
        }

    }
    return result;
};