/**
 * @param {string} s
 * @return {boolean}
 */
 // 73 test cases passed, beats 80.12% of Javascript submissions
var isValid = function(s) {
    var stack = [], pairs = {')':'(', ']':'[', '}':'{'};
    for(var i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        }
        else{
            var c = stack.pop();
            if(!pairs.hasOwnProperty(s[i]) || pairs[s[i]] !== c){
                return false;
            }
        }
    }
    if(stack.length > 0) return false;
    return true;
};
