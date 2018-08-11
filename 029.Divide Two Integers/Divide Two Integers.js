var divide = function(dividend, divisor) {

  var flag = !!((dividend ^ divisor) >> 31);
  var MAX = 2147483647, MIN = -2147483648, result = 0;
  if(divisor == MIN){
    return dividend == MIN ? 1 : 0;
  }
  if(dividend == MIN) {
    if(divisor > 0) {
      dividend += divisor;
    }
    else{
      dividend -= divisor;
    }
    result++;
  }
  dividend = dividend >= 0 ? dividend : 0 - dividend;
  divisor = divisor > 0 ? divisor : 0 - divisor;
  var r = divisor.toString(2).length, s = dividend.toString(2).length, div = s - r;
  while(dividend >= divisor){
    if((divisor << div) <= dividend) {
      result += (1 << div);
      dividend -= divisor << div;
    }
    div--;
  }
  result = flag ? 0 - result : result;
  if( result > MAX || result < MIN ) result = MAX;
  return result;
};
