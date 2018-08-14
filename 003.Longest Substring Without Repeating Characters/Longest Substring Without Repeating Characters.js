/**
 * @param {string} s
 * @return {number}
 */
//987 test cases passed, beats 42.91% of Javascript submissions
var lengthOfLongestSubstring = function(s) {
  var o = {}, result = 0, index = 0;
  for(var i = 0; i < s.length; i++) {
    if(o.hasOwnProperty(s[i])) {
      result = Math.max(result, i - index);
      index = Math.max(index, o[s[i]] + 1);
    }
    o[s[i]] = i;
  }
  result = Math.max(result, i - index);
  return result;
};
