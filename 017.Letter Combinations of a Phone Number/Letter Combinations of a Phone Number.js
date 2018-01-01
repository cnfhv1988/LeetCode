/**
 * @param {string} digits
 * @return {string[]}
 */
var arr = {'2':['a','b','c'],'3':['d','e','f'],'4':['g','h','i'],'5':['j','k','l'],
            '6':['m','n','o'],'7':['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z'],'0':[' ']}
var letterCombinations = function(digits) {
    if(digits.length==0)return [];
    if(digits.length==1)return arr[digits];
    var result=[];
    for(var i=0;i<arr[digits[0]].length;i++){
        var r = letterCombinations(digits.substring(1,digits.length));
        for(var j=0;j<r.length;j++){
            result.push(arr[digits[0]][i].concat(r[j]));
        }
    }
    return result;
};
