// Jump Game

// **** need to learn dynamic programming/greedy **

var canJump = function(nums) {
    let index = 0;
    while(index<nums.length -1){
        if(nums[index]=== 0) {
            return false
        }
        index+=(nums[index])
    }

    console.log(index)

    if(index >= nums.length -1){
        return true 
    }
}