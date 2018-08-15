/**
 * @param {string} str
 * @return {number}
 */
//1079 test cases passed, beats 88.50% of Javascript submissions
var myAtoi = function(str) {

    var MAX = Math.pow(2,31) - 1;
    var MIN = Math.pow(2,31) * (-1);
    var s = str.trim();
    var positive = true;
    if(s.length === 0) return 0;
    if(s[0] === '+' || s[0] === '-'){
        positive = s[0] === '-' ? false : true;
        s = s.slice(1)
    }

    var i = 0;
    var result = 0;
    while(i < s.length && s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57){
        result = result *10 + s[i].charCodeAt() - 48;
        i++;
    }
    result = positive ? result : result * (-1);
    result = result > MAX ? MAX : result;
    result = result < MIN ? MIN : result;
    return result;
};
