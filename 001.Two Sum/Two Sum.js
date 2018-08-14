/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//29 test cases passed, beats 99.98% submissions.
var twoSum = function(nums, target) {
    var o = {};
    var key;
    nums.forEach(function (value, index) {
        o[value] = index;
    });
    for(var i = 0; i < nums.length; i++){
        key = target - nums[i];
        if(o.hasOwnProperty(key) && i !== o[key]){
            return [i, o[key]];
        }
    }
};
