/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var roman = ['M','D','C','L','X','V','I'],div=1000,i=0,result='';
    while(num != 0){
        switch(Math.floor(num/div)){
            case 9:
                result = result + roman[i] + roman[i-2];
                break;
            case 8:
                result = result + roman[i-1] + roman[i] + roman[i] + roman[i];
                break;
            case 7:
                result = result + roman[i-1] + roman[i] + roman[i];
                break;
            case 6:
                result = result + roman[i-1] + roman[i];
                break;
            case 5:
                result = result + roman[i-1];
                break;
            case 4:
                result = result + roman[i] + roman[i-1];
                break;
            case 3:
                result = result + roman[i] + roman[i] + roman[i];
                break;
            case 2:
                result = result + roman[i] + roman[i];
                break;
            case 1:
                result = result + roman[i];
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
