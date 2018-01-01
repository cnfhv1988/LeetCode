/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 0) return "";
    if(numRows === 1 || s.length <= 1) return s;
    var result='',i,j,k;
    
    for(i=0;i<s.length;i+=numRows*2-2){
        result += s[i];
    }
    
    for(i=1;i<numRows-1&&i<s.length;i++){
        k=i;
        j=(numRows-i-1)*2;
        do{
            result += s[k];
            if(k+j < s.length){
                result += s[k+j];    
            }
        }while((k=k+2*numRows-2) < s.length);
    }
    
    for(i=numRows-1;i<s.length;i+=numRows*2-2){
        result += s[i];
    }
    
    return result;
};
