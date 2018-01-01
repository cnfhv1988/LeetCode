/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var roman = {'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1},result=roman[s[s.length-1]];
    for(var i=s.length-2;i>=0;i--){
        result += roman[s[i]] >= roman[s[i+1]]?roman[s[i]]:-roman[s[i]]
    }
    return result;
};
