const danishWords = ["plante" ,"bil" , "kaffe", "bog", "øl", "planetarium","p"];
function shortestWord(str){
  
  if(Array.isArray(str)){
    let words = str;
    console.log(words);
     let shortest = words.reduce((shortestWord, currentword) => {
       return currentword.length < shortestWord.length
         ? currentword
         : shortestWord;
     }, words[0]);
     return shortest;
  }
  else{
    let words = str.split(" ");
    console.log(words);
    let shortest = words.reduce((shortestWord, currentword) => {
      return currentword.length < shortestWord.length
        ? currentword
        : shortestWord;
    }, words[0]);
return shortest;
  }
  

  
    
}

console.log(shortestWord("the most important is"));