

function danishLetters(str) {
 let smallLetters = str.toLowerCase();
  let letter_count1 = 0; // this "å" counter
  let letter_count2 = 0; // this "ø" counter
  let letter_count3 = 0; // this "æ" counter
  
  for (let i = 0; i < smallLetters.length; i++) {
    if (smallLetters[i] == "å" ) {
      letter_count1 += 1;
    } else if (smallLetters[i] == "ø") {
             letter_count2 += 1;
           } else if (smallLetters[i] == "æ") {
                    letter_count3 += 1;
                  }
  }
  // check if there is danish letters 
  if (
    smallLetters.indexOf("å") == -1 &&
    smallLetters.indexOf("ø") == -1 &&
    smallLetters.indexOf("æ") == -1
  ) {
    return "there is no any danish letters in your sentenece";
  } else {
    let result = {};
    result.ø = letter_count2;
    result.å = letter_count1;
    result.æ = letter_count3;

    return result;
  }
  
}
     

console.log(danishLetters("Jeg har en bl bil ÅÅÅ "))