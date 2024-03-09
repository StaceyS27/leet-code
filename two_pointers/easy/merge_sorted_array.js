
// ** not correct still leaves trailing 0

// both input arrays in ascending order  (nums1 and nums2)
// m - number of elements in nums1
// n - number of elements in nums2 
// merge both arrays in ascesding order 
// final sorted array should be stored inside the array nums1 (this should be returned?)
// nums1 has length of m + n. last n elements set to 0. first m elements are the original input array (?)

// 1 pointer on nums 1 and other on nums2
// if nums2 element is greater than, but less than element in next position in num1 splice (insert)
// move pointers reach end of nums2


var merge = function(nums1, m, nums2, n) {
    let pointer1 = 0;
    let pointer2 = 0;

    while(nums1[pointer1 +1]!==0 && nums1[pointer1 +2]!==0){
        if(nums1[pointer1]>= nums2[pointer2]){
            nums1.splice(pointer1,0, nums2[pointer2])
            pointer1++;
            pointer2++;
            nums1.splice(nums1.length-1, 1)
        } else {
            pointer1++
        }
    }

    for(let i=pointer2; i<nums2.length; i++){
        nums1.splice(pointer1+1,1, nums2[pointer2])
        pointer1++
        pointer2++
    }

    

    return nums1
};