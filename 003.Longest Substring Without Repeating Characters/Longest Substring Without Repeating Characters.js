/**
 * @param {string} s
 * @return {number}
 */
//beats 42.91% Javascript submissions
var lengthOfLongestSubstring = function(s) {
    var arr=[],max=0,i,len,index;
    for(i=0,len=s.length;i<len;i++){
        index = arr.indexOf(s[i]);
        if(index >= 0){
            max = Math.max(max,arr.length);
            arr.splice(0,index+1);
        }
        arr.push(s[i]);  
    }
    return Math.max(max,arr.length);
};
