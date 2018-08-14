/**
 * @param {number} x
 * @return {number}
 */
//beats97.39% submissions
var reverse = function(x) {
    var flag = !!(x >> 31);
    var result = 0, MAX = Math.pow(2,31) - 1, MIN = -Math.pow(2, 31)
    x = Math.abs(x);
    while(x > 0){
        result = result * 10 + x % 10;
        x = Math.floor(x/10);
    }
    result = flag ? result * (-1) : result;
    if(result > MAX || result < MIN) return 0;
    return result;
};
