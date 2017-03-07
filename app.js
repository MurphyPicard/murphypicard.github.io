console.log('JS is linked');


function isalpha(c) {
  return (( (c >= 'a') && (c <= 'z') ) || ( (c >= 'A') && (c <= 'Z') ));
}
function isdigit(c) {
  return ((c >= '0') && (c <= '9'));
}
function isalnum(c) {
  return (isalpha(c) || isdigit(c));
}



function isPal (phrase){
  var s = 0;        //referring to startIndex
  var e = x.length; //referring to endIndex

  while(s <= e){
    if      ( !(isalpha(phrase[s])) ){
      s ++;
      //only moves on non-letters
    }
    else if ( !(isalpha(phrase[e])) ){
      e --;
      //only moves on non-letters
    }
    else if ( phrase[s].toUpperCase() != phrase[e].toUpperCase() ){
      //comparing for inequality to eliminate non-palindromes
      return false;
    }
    else {
      //moving both indexes at the same time
      s ++;
      e --;
    }
  }//while
  return true;
}//isPal

function combinesWordsNTimes (x,n){
  var combinedWord = "";
  var i = 0;
  while (i < n){
    combinedWord += x;
    i++;
  }
  return combinedWord;
}

var names = {
  name: "ara",
  title: "dad"
}

var Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
};

function addIt ( sdfgsdfgsdfg, sdfgsdfg ){
  return sdfgsdfgsdfg + sdfgsdfg;
}

// other peoples functions that I should remember easily *******************

//good use of map function
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
