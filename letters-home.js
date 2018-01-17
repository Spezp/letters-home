const lettersHome = function(string) {
  var newArray = string.split('');
  var obj = {};
  newArray.a = 0;
  newArray.forEach(function(letter){ if(letter !== ' ') { obj[letter] = obj[letter] ? obj[letter] + 1 : 1;  } });
  return obj;
};

console.log(lettersHome('aaass ssddd'));