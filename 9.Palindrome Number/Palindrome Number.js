/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x > Math.pow(2,31)-1 ||  x < 0)
        return false;
    var lbound=1,ubound=Math.pow(10,x.toString().length-1);
    while(lbound<ubound){
        if(Math.floor(x/lbound)%10 !== Math.floor(x/ubound)%10)
           return false;
        lbound *= 10;
        ubound /= 10;
        } ; 
    return true;
};
