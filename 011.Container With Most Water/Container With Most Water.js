//beats 27.97% submissions
var maxArea = function(height) {

    var o = {}, len = height.length, i, j, max = 0;
    for(i = 0; i < len; i++){
        o[height[i]] = -1;
    }
    for(i = 0; i < len; i++) {
        for(j = 0; j < i; j++) {
            if(height[i] <= height[j]) {
                o[height[i]] = Math.max(i - j, o[height[i]]);
                break;
            }
        }
        for(j = len - 1; j > i + o[height[i]]; j--){
            if(height[i] <= height[j]) {
                o[height[i]] = Math.max(j - i, o[height[i]]);
                break;
            }
        }
    }
    for(var height in o) {
        if(o[height] == -1) continue;
        max = Math.max(parseInt(height) * o[height],max);
    }
    return max;
};
