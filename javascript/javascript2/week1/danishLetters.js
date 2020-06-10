
function danishLetters(str) {
  let letter_count1 = 0; // this "å" counter
  let letter_count2 = 0; // this "ø" counter
  let letter_count3 = 0; // this "æ" counter
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "å") {
      letter_count1 += 1;
    } else if (str[i].toLowerCase() == "ø") {
      letter_count2 += 1;
    } else if (str[i].toLowerCase() == "æ") {
             letter_count3 += 1;
           } 
  }
  // check if there is danish letters 
  if (
    str.toLowerCase().indexOf("å") === -1 &&
    str.toLowerCase().indexOf("ø") === -1 &&
    str.toLowerCase().indexOf("æ") === -1
  ) {
    return "there is no any danish letters in your sentenece" ;
  }
  
  else{ 
      
         
          return  "å = " + letter_count1 + 
          " ø =" + letter_count2 + 
          " æ = " + letter_count3 +
          " total = " + (letter_count1 + letter_count2 + letter_count3)
      
    }

  
   
     
    
     
   
      
 
  
}
     

console.log(danishLetters("Jeg har en bl bil æåøøøø"))