//beats 100% submissions
var nextPermutation = function(nums) {

  var len = nums.length, temp = 0;
  if(len == 0) return
  var k, m;
  for(var i = len - 1; i > 0 ; i--){
    if(nums[i - 1] < nums[i]) {
      k = i, m = len - 1;
      while(k < m) {
        temp = nums[m];
        nums[m] = nums[k];
        nums[k] = temp;
        k++;
        m--;
      }
      k = i;
      while(nums[k] <= nums[i - 1] && k < len - 1) {
        k++;
      }
      temp = nums[k];
      nums[k] = nums[i - 1];
      nums[i - 1] = temp;
      return
    }
  }
  nums = nums.sort(function (a, b) {
    return a-b;
  });
  return;
};
