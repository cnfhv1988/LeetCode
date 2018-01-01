/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    return strs.length > 0 ? strs.reduce(function(prev,curr,item){
        var i=0;
        while(i<prev.length && i<curr.length && prev[i] === curr[i])i++;
        return prev.substring(0,i);
    },strs[0]) : '';
};
