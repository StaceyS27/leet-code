/**
 * Linear 
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Merge Sorted Array

// both input arrays in ascending order  (nums1 and nums2)
// m - number of elements in nums1 (to be considered, not including trailing 0s)
// 0s in nums1 array placed to ensure that array is long enough to accomodate the insertion of nums2 in a sorted manner
// n - number of elements in nums2 
// merge both arrays in ascesding order 
// final sorted array should be stored inside the array nums1 (this should be returned?)
// nums1 has length of m + n. last n elements set to 0. first m elements are the original input array (?)


function merge(nums1, m, nums2, n) {
    let k = m + n - 1;                                     // k pointer represents end of the nums1 array (last index). has 0s at end 
    let nums1P = m - 1;                                    // nums1P pointer starts at the last index of of the nums1 array with actual numbers to consider (length of nums1 (m) - 1)
    let nums2P = n - 1;                                    // nums2P pointer starts at the last index of nums2. n is the length of nums2

    while(nums1P >= 0 && nums2P >= 0) {                     // will start at enf of both arrays and compare values
        if(nums1[nums1P] > nums2[nums2P]) {                 // will add them from the back to the front, placing the greater value at the end
            nums1[k] = nums1[nums1P];                       // the end is being tracked by the k pointer, which moves as the indices are filled
            nums1P--;
        } else {
            nums1[k] = nums2[nums2P]                        // will happen instead if nums2[nums2P] > the nums1 element being compared
            nums2P--;                                       // depending on which element is greater, as they are placed in correct position in nums1 at k, 
        }                                                   // the nums2P pointer or nums1P pointer move to say that that number has been considered and taken account of, can move on to next one 
        k--;
    }

    while(nums2P >= 0) {                                   // this part is executed when nums2P has not yet finish iteration through nums2 array,
        nums1[k] = nums2[nums2P];                           // but cannot continue bc iteration through nums1 is done already (1st while loop  condition no longer true)
        nums2P--;                                           // happens when nums2 has elements less than smallest and first elements in nums1 (input arrays are sorted)
        k--;                                               // bc arrays are sorted, can just add elements at nums2P pointer to the position pointed at by the k pointer
    }                                                      // in the same order bc placing larger ones first and keep addding smaller ones to the front as both pointers are moved
                                                            // when nums2P is less than 0, iteration through nums2 is complete and no need to continue adding nums2 elements to nums1
    return nums1
    
}


