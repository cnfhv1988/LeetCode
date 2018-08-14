/**
 * @param {string} s
 * @return {boolean}
 */
 // 73 test cases passed, beats 7.24% of Javascript submissions
var isValid = function(s) {

    var parenthese = {')':'(',']':'[','}':'{'},stack=[];
    for(var i=0;i<s.length;i++){
        if(s[i] == '{' || s[i] == '[' || s[i] == '('){
            stack.push(s[i]);
        }
        else{
            if(stack.length == 0 || stack.pop() != parenthese[s[i]] ){
                return false;
            }
        }
    }
    if(stack.length != 0){
        return false;
    }
    return true;
};
