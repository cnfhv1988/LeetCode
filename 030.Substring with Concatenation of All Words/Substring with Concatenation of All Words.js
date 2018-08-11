//beats 58.73% of Javascript submission
var findSubstring = function(s, words) {

  var result = []
  if(s.length  == 0 || words.length == 0) return result;

  var len = words[0].length;
  var counts = words.length;
  var word = [], temp = [], k = 0;
  if(s.length < len * counts) return result;

  for(var i = 0; i <= s.length - len * counts; i++) {
    k = i;
    temp = [];
    word = words.slice(0);
    while(true){
      var index = word.indexOf(s.substr(k,len));
      if( index >= 0 && temp.indexOf(index) == -1 ){
        temp.push(index)
        delete word[index]
      }
      else{
        break;
      }
      if(temp.length == counts){
        result.push(i);
        break;
      }
      k += len;
    }
  }
  return result;
};
