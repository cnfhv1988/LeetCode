/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//29 test cases passed, beats 31.90% submissions.
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        if(nums.indexOf(target-nums[i],i+1) >= 0){
            return [i,nums.indexOf(target-nums[i],i+1)];
        }
    }
};
