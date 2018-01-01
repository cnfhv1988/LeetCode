/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var r = parseInt(Math.abs(x).toString().split("").reverse().join(""));
    return (r >= Math.pow(2,31) || r < -Math.pow(2,31)) ? 0 : (x>=0 ? r : -r);
};
