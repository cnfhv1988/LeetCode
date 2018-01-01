/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var roman = ['M','D','C','L','X','V','I'],div=1000,i=0,result='',temp;
    while(num != 0){
        temp = Math.floor(num/div);
        switch(temp){
            case 9:
                result = result + roman[i] + roman[i-2];
                break;
            case 8:
            case 7:
            case 6:
            case 5:
                result = result + roman[i-1] + (new Array(temp-4)).join(roman[i]);
                break;
            case 4:
                result = result + roman[i] + roman[i-1];
                break;
            case 3:
            case 2:
            case 1:
                result = result + (new Array(temp+1)).join(roman[i]);
                break;
            case 0:
                break;
            
        }
        num %= div;
        div /= 10;
        i += 2
    }
    return result;
};
